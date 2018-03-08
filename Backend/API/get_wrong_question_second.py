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
    cur.execute('insert into error_question_second values(%s,%s,%s,%s)', (0,username,str(articleid),str(errorquestionid)))
    conn.commit()
    cur.close()
    conn.close()

def storage_all_error_questions(quelist_id,username,article_id):
    articleid = int(article_id)
    if len(quelist_id) != 0:
        for i in quelist_id:
            storage_error_questions(username,articleid,i)
def storagel():
    sys.exit(storage_all_error_questions(sys.argv[3::],sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    storagel()
    # storage_all_error_questions('1 5 8','lxq',13)