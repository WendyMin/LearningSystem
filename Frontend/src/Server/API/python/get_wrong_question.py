# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
import urllib
import json
import random
from urllib import urlencode
from urllib import quote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
def storage_error_questions(username,articleid,errorquestionid):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    cur.execute('insert into error_question values(%s,%s,%s,%s)', (0,username,str(articleid),str(errorquestionid)))
    conn.commit()
    cur.close()
    conn.close()

def storage_all_error_questions(quelist_id,username,article_id):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    articleid = int(article_id)
    sql = '''select count(*) from question WHERE article_id = %s''' % (articleid)
    cur.execute(sql)
    ressult = cur.fetchall()
    # print int(ressult[0][0])
    question_total = int(ressult[0][0])
    # print question_total
    question_right = int(ressult[0][0])-len(quelist_id)
    # print question_right
    sql_lll = '''select id from user  WHERE user_name = "%s"''' % (username)
    cur.execute(sql_lll)
    resuu = cur.fetchall()
    # print resuu[0][0]
    user_id = int(resuu[0][0])
    # print user_id
    accuracy = question_right/question_total
    print accuracy
    cur.execute('insert into article_count values(%s,%s,%s,%s,%s,%s)', (0,str(user_id),str(articleid),str(question_right),str(question_total),\
                                                                        str(accuracy)))
    conn.commit()
    if len(quelist_id) != 0:
        for i in quelist_id:
            storage_error_questions(username,articleid,i)

    conn.commit()
    cur.close()
    conn.close()
def storagel():
    print 'a'
    sys.exit(storage_all_error_questions(sys.argv[3::],sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    storagel()
    # storage_all_error_questions('1 5 8','lxq',13)