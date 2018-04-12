# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
import urllib
import json
from urllib import urlencode
from urllib import quote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
def recommend_passage(user_name):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', \
                           port = 3306,charset='utf8')
    cur = conn.cursor()
    sql = 'select recommend_art_id from user WHERE user_name = "%s"' % (user_name)
    cur.execute(sql)
    passage_id = cur.fetchall()
    print passage_id[0][0]
    #return passage_id[0][0]
	
	
def recommend_passage_l():
	recommend_passage(sys.argv[1])