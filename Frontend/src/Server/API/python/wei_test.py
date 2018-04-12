# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#给一个用户名，一个大类的名称，返回该大类中所有剩余的题目
def wei_cheshi(username,type):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    id_list = []
    all_question_list = []
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
    sql = 'select * from %s'%(type1)
    cur.execute(sql)
    all_question = cur.fetchall()  #得到一张表中所有数据

    sql_zhongdian =  '''select * from logic_storage_zhongdian_type where userid = "%s" and type1 = "%s"''' % (username,type)
    cur.execute(sql_zhongdian)
    has_finishedzhongdian_question = cur.fetchall()
    if len(has_finishedzhongdian_question) != 0:
        for i in range(len(has_finishedzhongdian_question)):
            id_list.append(int(has_finishedzhongdian_question[i][0]))

    sql_qianghua =  '''select * from logic_storage_qianghua_type where userid = "%s" and type1 = "%s"''' % (username,type)
    cur.execute(sql_qianghua)
    has_finishedqianghua_question = cur.fetchall()
    if len(has_finishedqianghua_question) != 0:
        for i in range(len(has_finishedqianghua_question)):
            id_list.append(int(has_finishedqianghua_question[i][0]))
    # print id_list

    for j in range(len(all_question)):
        if int(all_question[j][0]) not in id_list:
            a_dict = {}
            a_dict['id'] = int(all_question[j][0])
            a_dict['question'] = str(all_question[j][1]).decode('utf-8').strip()[2::].strip()
            a_dict['answer'] = str(all_question[j][2]).decode('utf-8')
            a_dict['analysis'] = str(all_question[j][3]).decode('utf-8').strip()[2::].strip()
            option_list=[]
            for r in range(5):
                option_list.append(str(all_question[j][r+4]).decode('utf-8'))
            a_dict['option'] = option_list
            a_dict['type'] = str(all_question[j][9]).decode('utf-8')
            if len(a_dict) != 0:
                all_question_list.append(a_dict)
    jsondata = json.dumps(all_question_list, ensure_ascii=False)
    print jsondata
def wei_test1():
    sys.exit(wei_cheshi(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    # wei_cheshi('lxq','命题逻辑')
    wei_test1()