#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

#前端提供：用户名
#返回：该用户所有做过的logic大类名，例如：[{"done_chapters": ["描述", "支持", "归纳"]}]

def logic_user_done(user_name):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1 = 'select * from logic_xingshi'
    len1=(cur.execute(sql1))
    all_data1 = cur.fetchall()

    sql2 = 'select * from logic_lunzheng'
    len2=(cur.execute(sql2))
    all_data2= cur.fetchall()

    result=[];result_final=[]
    for x in all_data1:
        if x[2]==user_name and str(x[3])=='1'.decode('utf-8'):
            result.append(x[1])

    for x in all_data2:
        if x[2]==user_name and str(x[3])=='1'.decode('utf-8'):
            result.append(x[1])

    # print(result)
    for res in result:
        dict={}
        dict['done_chapters']=res
        result_final.append(dict)
    # final_result=[]
    # final_result.append(dict)
    jsondata = json.dumps(result_final, ensure_ascii=False)
    print(jsondata)

#logic_user_done('lxq')


def logic_user_done1():
    sys.exit(logic_user_done(sys.argv[1]))
if __name__=='__main__':
    logic_user_done1()
    # logic_user_done('lxq')


