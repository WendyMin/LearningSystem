# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
import urllib
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def unit(username):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', \
                           port = 3306,charset='utf8')
    cur = conn.cursor()
    sql_lll = '''select id from user  WHERE user_name = "%s"''' % (username)
    cur.execute(sql_lll)
    resuu = cur.fetchall()
    # print resuu[0][0]
    userid = int(resuu[0][0])
    sql = 'select next_course,next_unite from user WHERE id = "%s"' % (userid)
    cur.execute(sql)
    result = cur.fetchall()
    # print passage_id[0][0]
    d = {}
    d['course'] = result[0][0];d['unit'] = result[0][1]
    print json.dumps(d,ensure_ascii=False)
def offer_unitl():
	sys.exit(unit(sys.argv[1]))
if __name__ == '__main__':
    offer_unitl()
   # unit('lxq')
