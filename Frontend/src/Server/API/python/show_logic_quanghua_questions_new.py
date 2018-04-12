#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

#输入 type1大类 type2小类
#输出 每个小类五道题，题目的所有信息，并标注难易程度；五道题=1易+2中+2难，如果该类别无题or少题，仅将有的输出
#按顺序输出 1）易--中--难 2)中和难 序号小号在前
def select_type(username):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sqlllll = '''select * from logic_xingshi where user_name = "%s" and if_done = "%s"'''%(username,0)
    cur.execute(sqlllll)
    restlll = cur.fetchall()
    lens = len(restlll)
    qwe = ''
    if int(lens) == 0:
        qwe = 'logic_lunzheng'
    else:
        qwe = 'logic_xingshi'
    sqll = '''select * from %s where user_name = "%s" and if_done = "%s"'''%(qwe,username,0)
    cur.execute(sqll)
    rest = cur.fetchall()
    # print rest
    recommend_type = rest[0][1]
    # print recommend_type
    sql_lll = '''select * from logic_type_divide where belongto = "%s"'''%(recommend_type)
    cur.execute(sql_lll)
    rest_l = cur.fetchall()
    # print rest_l
    type_lll = []
    for content in rest_l:
        type_lll.append(content[1])
    # for i in type_lll:
    #     print i
    final_resultl = []
    for ty in type_lll:
        final_resultl = final_resultl + show_logic_quanghua_questions(recommend_type,ty)
    jsondata = json.dumps(final_resultl, ensure_ascii=False)
    print jsondata

#为每个问题生成一个字典
def create_dict(timu_tuple,typel):
    per_dict={};option=[]
    per_dict['id']=timu_tuple[0]
    per_dict['question']=timu_tuple[1].decode('utf-8').strip()[2::].strip()
    ans=''
    if str(timu_tuple[2]).decode('utf-8') == 'A'.decode('utf-8'):
            ans = '0'
    elif str(timu_tuple[2]).decode('utf-8') == 'B'.decode('utf-8'):
        ans = '1'
    elif str(timu_tuple[2]).decode('utf-8') == 'C'.decode('utf-8'):
        ans = '2'
    elif str(timu_tuple[2]).decode('utf-8') == 'D'.decode('utf-8'):
        ans = '3'
    else:
        ans = '4'
    per_dict['answer']=ans
    per_dict['analysis']=timu_tuple[3].decode('utf-8').strip()[2::].strip()
    for i in range(4,9):
        option.append(timu_tuple[i])
    per_dict['option']=option
    # per_dict['hard']=timu_tuple[10]
    if str(timu_tuple[10]).decode('utf-8') == '难'.decode('utf-8'):
            per_dict['hard']='hard'.decode('utf-8')
    elif str(timu_tuple[10]).decode('utf-8') == '中'.decode('utf-8'):
        per_dict['hard']='meddium'.decode('utf-8')
    else:
        per_dict['hard']='easy'.decode('utf-8')
    per_dict['type']=str(typel).decode('utf-8')
    return per_dict

#middle 和hard中要选2道题，但要考虑仅有1道题的情况
def get_middle_hard(all,typell):
    per_result=[]
    count=0
    for x in all:
        count+=1

    if count>=2:
        slice2=random.sample(all,2)
        timu1=slice2[0];timu2=slice2[1]
        if(slice2[0][0] >slice2[1][0]):
            temp=timu2
            timu2=timu1
            timu1=temp

        timu=[]
        timu.append(timu1);timu.append(timu2)

        for x in timu:
            dict=create_dict(x,typell)
            per_result.append(dict)
    else:
        slice2=random.sample(all,1)[0] #仅有一个问题 也只得到一个
        dict=create_dict(slice2,typell)
        per_result.append(dict)
    return per_result

def find_test_question(type1,type2):#从logic_test_per_question 找到涉及题型的id，强化时不再提供这类题目
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql = 'select * from logic_storage_zhongdian_type'
    len=(cur.execute(sql))
    passage_id=cur.fetchall()
    question_id=[]
    for i in range(0,len):
        if (str(passage_id[i][2])==str(type1).decode('utf-8')) and (str(passage_id[i][3]).decode('utf-8')==str(type2).decode('utf-8')):
            question_id.append(int(passage_id[i][4]))
    return question_id

#
# '''
# question_id=find_test_question(type1='logic_apply',type2='模态推理')
# print(question_id)
# '''


def show_logic_quanghua_questions(type1,type2):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    type_1 = type1
    if type1 == '逻辑语言'.decode('utf-8'):
        type1 = 'logic_language'
    elif type1 == '命题逻辑'.decode('utf-8'):
        type1 = 'logic_question'
    elif type1 == '词项逻辑'.decode('utf-8'):
        type1 = 'logic_word'
    elif type1 == '逻辑应用'.decode('utf-8'):
        type1 = 'logic_apply'
    elif type1 == '演绎推理'.decode('utf-8'):
        type1 = 'logic_yanyituili'
    elif type1 == '归纳逻辑'.decode('utf-8'):
        type1 = 'logic_conclude'
    elif type1 == '假设'.decode('utf-8'):
        type1 = 'logic_assumption'
    elif type1 == '支持'.decode('utf-8'):
        type1 = 'logic_support'
    elif type1 == '削弱'.decode('utf-8'):
        type1 = 'logic_cutdown'
    elif type1 == '评价'.decode('utf-8'):
        type1 = 'logic_evaluate'
    elif type1 == '解释'.decode('utf-8'):
        type1 = 'logic_explain'
    elif type1 == '推论'.decode('utf-8'):
        type1 = 'logic_tuilun'
    elif type1 == '比较'.decode('utf-8'):
        type1 = 'logic_compare'
    elif type1 == '描述'.decode('utf-8'):
        type1 = 'logic_describe'
    else:
        type1 = 'logic_zonghe'
    sql = 'select * from %s'%(type1)
    len=(cur.execute(sql))
    passage_id = cur.fetchall()  #得到type1表中所有数据

    question_id=find_test_question(type_1,type2)

   #找到type2所有可能涉及的题,这类题未在入口测试中出现过
    type2_list=[];len_type2=0
    for i in range (0,len):
        if passage_id[i][9]== type2:
            if int(passage_id[i][0]) not in question_id:
                len_type2+=1
                type2_list.append(passage_id[i])

    easy=[];middle=[];hard=[]
    for x in type2_list:
        if x[10].strip()=='易'.decode('utf-8'):
            easy.append(x)
        elif x[10].strip()=='中'.decode('utf-8'):
            middle.append(x)
        elif x[10].strip()=='难'.decode('utf-8'):
            hard.append(x)

    slice1=[];slice2=[];slice3=[]
    result=[]

    if easy:  #仅输出一道简单题
        slice1=random.sample(easy,1)[0]
        dict_easy=create_dict(slice1,type2)
        result.append(dict_easy)

    per_result_hard=[];per_result_middle=[]
    if middle:
        per_result_middle=get_middle_hard(middle,type2)

    if hard:
        per_result_hard=get_middle_hard(hard,type2)

    final_result=result+per_result_middle+per_result_hard
    jsondata = json.dumps(final_result, ensure_ascii=False)
    # print jsondata
    return final_result



#show_logic_quanghua_questions('logic_zonghe','完成段落')

def show_logic_quanghua_questions1():
    sys.exit(select_type(sys.argv[1]))

if __name__=='__main__':
    # select_type('lxq')
    show_logic_quanghua_questions1()
    # show_logic_quanghua_questions('命题逻辑','推理选言')
    # find_test_question('命题逻辑','推理选言')
