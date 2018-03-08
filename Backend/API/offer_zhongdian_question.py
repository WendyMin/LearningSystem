#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

#输入 type1大类 type2小类
#输出 每个小类三道题，题目的所有信息，并标注难易程度；如果某一类别无题，则其余类别依旧仅输出一道
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
    final_result = []
    for ty in type_lll:
        final_result = final_result + show_logic_questions(recommend_type,ty)
    jsondata = json.dumps(final_result, ensure_ascii=False)
    print jsondata
def show_logic_questions(type1,type2):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
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
    passage_id = cur.fetchall()  #得到一张表中所有数据


   #找到type2所有可能涉及的题
    type2_list=[];len_type2=0
    for i in range (0,len):
        if passage_id[i][9]== type2:
            len_type2+=1
            type2_list.append(passage_id[i])

    easy=[];middle=[];hard=[]
    for x in type2_list:
        if x[10].strip()=='易':
            easy.append(x)
        elif x[10].strip()=='中':
            middle.append(x)
        elif x[10].strip()=='难':
            hard.append(x)

    slice1=[];slice2=[];slice3=[]
    result=[]
    if easy:
        slice1=random.sample(easy,1)
        dict1={}
        slice1=slice1[0]
        dict1['id']=slice1[0]
        dict1['question']=str(slice1[1]).decode('utf-8').strip()[2::].strip()
        ans = ''
        if str(slice1[2]).decode('utf-8') == 'A'.decode('utf-8'):
            ans = '0'
        elif str(slice1[2]).decode('utf-8') == 'B'.decode('utf-8'):
            ans = '1'
        elif str(slice1[2]).decode('utf-8') == 'C'.decode('utf-8'):
            ans = '2'
        elif str(slice1[2]).decode('utf-8') == 'D'.decode('utf-8'):
            ans = '3'
        else:
            ans = '4'
        dict1['answer']=ans
        dict1['analysis']=str(slice1[3]).decode('utf-8').strip()[2::].strip()
        option=[]
        for i in range(4,9):
            option.append(slice1[i])
        dict1['option']=option
        dict1['type']=str(type2).decode('utf-8')
     #   dict1['type']=slice1[9]
        if str(slice1[10]).decode('utf-8') == '难'.decode('utf-8'):
            dict1['hard']='hard'.decode('utf-8')
        elif str(slice1[10]).decode('utf-8') == '中'.decode('utf-8'):
            dict1['hard']='meddium'.decode('utf-8')
        else:
            dict1['hard']='easy'.decode('utf-8')
        result.append(dict1)

    if middle:
        slice2=random.sample(middle,1)
        dict2={}
        slice2=slice2[0]
        dict2['id']=slice2[0]
        dict2['question']=str(slice2[1]).decode('utf-8').strip()[2::].strip()
        anss = ''
        if str(slice2[2]).decode('utf-8') == 'A'.decode('utf-8'):
            anss = '0'
        elif str(slice2[2]).decode('utf-8') == 'B'.decode('utf-8'):
            anss = '1'
        elif str(slice2[2]).decode('utf-8') == 'C'.decode('utf-8'):
            anss = '2'
        elif str(slice2[2]).decode('utf-8') == 'D'.decode('utf-8'):
            anss = '3'
        else:
            anss = '4'
        dict2['answer']=anss
        dict2['analysis']=str(slice2[3]).decode('utf-8').strip()[2::].strip()
        option=[]
        for i in range(4,9):
            option.append(slice2[i])
        dict2['option']=option
        if str(slice2[10]).decode('utf-8') == '难'.decode('utf-8'):
            dict2['hard']='hard'.decode('utf-8')
        elif str(slice2[10]).decode('utf-8') == '中'.decode('utf-8'):
            dict2['hard']='meddium'.decode('utf-8')
        else:
            dict2['hard']='easy'.decode('utf-8')
    #    dict2['type']=slice2[9]
    #     dict2['hard']=slice2[10]
        dict2['type']=str(type2).decode('utf-8')
        result.append(dict2)
    if hard:
        dict3={}
        slice3=random.sample(hard,1)
        slice3=slice3[0]
        dict3['id']=slice3[0]
        dict3['question']=str(slice3[1]).decode('utf-8').strip()[2::].strip()
        ansl = ''
        if str(slice3[2]).decode('utf-8') == 'A'.decode('utf-8'):
            ansl = '0'
        elif str(slice3[2]).decode('utf-8') == 'B'.decode('utf-8'):
            ansl = '1'
        elif str(slice3[2]).decode('utf-8') == 'C'.decode('utf-8'):
            ansl = '2'
        elif str(slice3[2]).decode('utf-8') == 'D'.decode('utf-8'):
            ansl = '3'
        else:
            ansl = '4'
        dict3['answer']=ansl
        dict3['analysis']=str(slice3[3]).decode('utf-8').strip()[2::].strip()
        option=[]
        for i in range(4,9):
            option.append(slice3[i])
        dict3['option']=option
        dict3['type']=str(type2).decode('utf-8')
        # dict3['hard']=slice3[10]
        if str(slice3[10]).decode('utf-8') == '难'.decode('utf-8'):
            dict3['hard']='hard'.decode('utf-8')
        elif str(slice3[10]).decode('utf-8') == '中'.decode('utf-8'):
            dict3['hard']='meddium'.decode('utf-8')
        else:
            dict3['hard']='easy'.decode('utf-8')
        result.append(dict3)

    jsondata = json.dumps(result, ensure_ascii=False)
    # print(jsondata)
    return result

#show_logic_questions('logic_language','言语理解')

def show_logic_questions1():
    sys.exit(select_type(sys.argv[1]))


if __name__=='__main__':
    show_logic_questions1()
    # show_logic_questions('logic_language','言语理解')
    # select_type('lxq')



