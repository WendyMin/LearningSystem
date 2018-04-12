# coding=utf-8
from __future__ import division
import json
import MySQLdb
import datetime
import urllib
from urllib import urlencode
from urllib import quote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def finished_article(username):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    sql_lll = '''select id from user  WHERE user_name = "%s"''' % (username)
    cur.execute(sql_lll)
    resuu = cur.fetchall()
    # print resuu[0][0]
    user_id = int(resuu[0][0])
    sql_lllll = '''select article_id from article_count  WHERE user_id = %d''' % (user_id)
    cur.execute(sql_lllll)
    resulo = cur.fetchall()
    # print resulo
    finish_article = []
    for content in resulo:
        finish_article.append(int(content[0]))
    l = len(finish_article)
    unit_all = l//7+1
    content = []
    for i in range(l):
        course = i + 1
        unit_ll = 0
        for j in range(unit_all):
            unit_l = j + 1
            if (unit_l-1)*7< course <= unit_l*7:
                unit_ll = unit_l
        content.append({'unit':str(unit_ll),'course':str(course),'articleid':str(finish_article[i])})
    # content = {}
    # content['item'] = finish_article
    # content = [{'unit':'1','course':'1','articleid':'9'},{'unit':'1','course':'2','articleid':'10'},\
    # {'unit':'1','course':'3','articleid':'12'}]
    jsondata = json.dumps(content,ensure_ascii=False)
    # jsondata_sub = jsondata[1:len(jsondata)-1]
    print jsondata

def finished_articlel():
	sys.exit(finished_article(sys.argv[1]))
if __name__ == '__main__':
   # finished_article('lxq')
    finished_articlel()
