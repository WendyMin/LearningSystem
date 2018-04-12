# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def jieshou_logic_user_ceshi(user,chapter_name,timu_id,timu_rate):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1="SELECT COUNT(*) FROM user_logic_finish_ceshi"
    cur.execute(sql1)
    id=int(cur.fetchall()[0][0])+1
    sql2="insert into  user_logic_finish_ceshi values('%d','%s','%s','%s','%s')"%(id,user,chapter_name,timu_id,timu_rate)
    cur.execute(sql2)
    conn.commit()
    conn.close()

    #print(id)
    result=["right"]
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata


def jieshou_logic_user_ceshi1():
    sys.exit(jieshou_logic_user_ceshi(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4]))
if __name__ == "__main__":

    jieshou_logic_user_ceshi1()

   #jieshou_logic_user_ceshi(user='testdzh',chapter_name='逻辑语言',timu_id="1*3*5*g1*g5*",timu_rate="1*0*0*0*1*")
