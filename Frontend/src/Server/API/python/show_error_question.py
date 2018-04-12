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

def show_question(user_name,articleId):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    passageid = int(articleId)
    sql_question_l = "select * from question WHERE article_id = %d" % (passageid) #读取文章
    cur.execute(sql_question_l)
    question_ll = cur.fetchall()
    sql_question = '''select error_question_id from error_question_second WHERE article_id = %d and username = "%s"''' % (passageid,user_name) #读取文章
    cur.execute(sql_question)
    question_l = cur.fetchall()
    # print question_l
    question = []
    if len(question_l) != 0:
        for nu in question_l:
            q_id = int(nu[0])-1
            question.append(question_ll[q_id])
        # print question
        article_question_all = {}
        article_setion_question = []
        for i in range(len(question)):
            question_all = {}
            question_all['question'] = question[i][1]

            question_all['questionid'] = int(question_l[i][0])
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
	sys.exit(show_question(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
	show_questionl()
    # show_question('lxq','5')

