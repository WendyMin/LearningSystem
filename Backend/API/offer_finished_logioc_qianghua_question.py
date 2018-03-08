#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )


#前端提供：用户名 大类名 要对的题or错的题（1or0）
#输出：用户u在大类下所有作对的题or错的题


#为每个题目生成一个字典
def create_dict(timu_tuple):
    per_dict={};option=[]
    per_dict['id']=timu_tuple[0]
    per_dict['question']=timu_tuple[1]
    per_dict['answer']=timu_tuple[2]
    per_dict['analysis']=timu_tuple[3]
    for i in range(4,9):
        option.append(timu_tuple[i])
    per_dict['option']=option
    per_dict['hard']=timu_tuple[10]
    per_dict['type']=str(timu_tuple[9]).decode('utf-8')
    return per_dict


def logic_show_finish_qianghua(user_name,type,wrong):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1 = 'select * from logic_storage_qianghua_type'
    len1=(cur.execute(sql1))
    all_data1 = cur.fetchall()

    biaohao=[]
    for x in all_data1:

        if str(x[1])==str(user_name) and str(x[2]).decode('utf-8')== str(type).decode('utf-8'):
            if int(x[5])==int(wrong):
                biaohao.append(x[4])
    type1 = type
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
    sql2= 'select * from %s'%(type1)
    cur.execute(sql2)
    all_data2 = cur.fetchall()
    result=[]
    count=0
    for x in all_data2:
        if x[0] in biaohao:
            count+=1
            per_timu=create_dict(x)
            result.append(per_timu)
    jsondata = json.dumps(result, ensure_ascii=False)
    print(jsondata)

#logic_show_finish_qianghua('zzz','logic_word',0)

def logic_show_finish_qianghua1():
    sys.exit(logic_show_finish_qianghua(sys.argv[1],sys.argv[2],sys.argv[3]))

if __name__ == '__main__':
    # logic_show_finish_qianghua('lxq','词项逻辑','1')
    logic_show_finish_qianghua1()

