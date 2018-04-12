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

def offer_passageid(user_name):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    sql = 'select recommend_art_id from user WHERE user_name = "%s"'  % (user_name)
    cur.execute(sql)
    passage_id = cur.fetchall()
    passageid = passage_id[0][0]
    
    article_id_all = {}
    article_id_list = []
    article_id_dict = {}
    article_id_dict['artid'] = str(passageid)
    article_id_list.append(article_id_dict)
    article_id_all['article_id'] = article_id_list
    jsondata = json.dumps(article_id_all,ensure_ascii = False)
    jsondata_sub = jsondata[1:len(jsondata)-1]
    print jsondata_sub
    #return jsondata_sub

def offer_passageidl():
	sys.exit(offer_passageid(sys.argv[1]))
if __name__ == '__main__':
	offer_passageidl()