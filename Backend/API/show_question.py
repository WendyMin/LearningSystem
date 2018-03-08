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

def show_question(user_name,lock,articleId):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    passageid = 0
    if str(lock) == '1':
        passageid = int(articleId)
    else:
        sql = 'select recommend_art_id from user WHERE user_name = "%s"' % (user_name)
        cur.execute(sql)
        passage_id = cur.fetchall()
        passageid = passage_id[0][0]
    sql_question = "select * from question WHERE article_id = %d" % (passageid) #读取文章
    cur.execute(sql_question)
    question = cur.fetchall()
    article_question_all = {}
    article_setion_question = []
    for i in range(len(question)):
        question_all = {}
        question_all['question'] = question[i][1]

        question_all['questionid'] = int(i)
        answer = 0
        if question[i][2] == 'A':
            answer = 0
        elif question[i][2] == 'B':
            answer = 1
        elif question[i][2] == 'C':
            answer = 2
        else:
            answer = 3
        question_all['key'] = int(answer)
        question_all['analysis'] = question[i][4]
        sql_question = "select option_all from question_option WHERE article_id = %d and question_id = %d" % (passageid,i+1) #读取文章
        cur.execute(sql_question)
        option = cur.fetchall()
        option_all = []
        for j in option:
            option_all.append(j[0])
        question_all['choice'] = option_all
        article_setion_question.append(question_all)
    article_question_all['article_question'] = article_setion_question
    jsondata = json.dumps(article_question_all['article_question'],ensure_ascii=False)
    # jsondata_sub = jsondata[1:len(jsondata)-1]
    cur.close()
    conn.close()
    print jsondata

def show_questionl():
    # print type(sys.argv[3]),sys.argv[1],sys.argv[2],sys.argv[3]
    if str(sys.argv[2]) == '0':
	    sys.exit(show_question(sys.argv[1],sys.argv[2],'1'))
    else:
        sys.exit(show_question(sys.argv[1],sys.argv[2],sys.argv[3]))
if __name__ == '__main__':
	show_questionl()
