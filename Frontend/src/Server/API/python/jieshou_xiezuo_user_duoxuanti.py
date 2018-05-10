# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def jieshou_xiezuo_user_duoxuanti(user,chapter_name,xuanxiang):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()


    sql1_1="select user_name,article_name from user_xiezuo_duoxuanti"
    cur.execute(sql1_1)
    all_info=cur.fetchall()
    #print(all_info)
    for x in all_info:
        if x[0]==user and x[1]==chapter_name:
            print "same user & chapter"
            return 0


    sql1="SELECT COUNT(*) FROM user_xiezuo_duoxuanti"
    cur.execute(sql1)
    id=int(cur.fetchall()[0][0])+1




    sql2="insert into user_xiezuo_duoxuanti values('%d','%s','%s','%s')"%(id,user,chapter_name,xuanxiang)
    cur.execute(sql2)
    conn.commit()
    conn.close()

    #print(id)
    result=["right"]
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata


def jieshou_xiezuo_user_duoxuanti1():
    sys.exit(jieshou_xiezuo_user_duoxuanti(sys.argv[1],sys.argv[2],sys.argv[3]))
if __name__ == "__main__":

   jieshou_xiezuo_user_duoxuanti1()

   #jieshou_xiezuo_user_duoxuanti(user='test_dzh',chapter_name='管理类联考2012年真题',xuanxiang="推断不出*条件缺失*")
