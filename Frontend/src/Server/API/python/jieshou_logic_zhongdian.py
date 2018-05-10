# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def jieshou_logic_user_zhongdian(user,chapter_name,timu_id,timu_rate):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1="SELECT COUNT(*) FROM user_logic_finish_zhongdian"
    cur.execute(sql1)
    id=int(cur.fetchall()[0][0])+1
    sql2="insert into  user_logic_finish_zhongdian values('%d','%s','%s','%s','%s')"%(id,user,chapter_name,timu_id,timu_rate)
    cur.execute(sql2)
    conn.commit()
    conn.close()

    #print(id)
    result=["right"]
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata


def jieshou_logic_user_zhongdian1():
    sys.exit(jieshou_logic_user_zhongdian(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4]))
if __name__ == "__main__":

    jieshou_logic_user_zhongdian1()

    #jieshou_logic_user_zhongdian(user='testdzh',chapter_name='逻辑语言',timu_id="7 10 13 14 15",timu_rate="1 0 1 1 1")
