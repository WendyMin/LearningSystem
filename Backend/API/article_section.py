# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
import urllib
from urllib import urlencode
from urllib import quote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
def offer_passage_recommend(articleID):
    # # print userid,articleID
    # articleid = 0
    # if articleID == '-1':
    #     articleid = recommend_passage(userid)
    # else:
    #     articleid = int(articleID)
    articleid = int(articleID)
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', \
                           port = 3306,charset='utf8')
    cur = conn.cursor()
    sql_passage = "select english,ch_translate from article_section WHERE article_id = %d" % (articleid) #读取文章
    cur.execute(sql_passage)
    sentence = cur.fetchall()
    sentence_list = []
    for i in range(len(sentence)):
        a_dict = {}
        a_dict["english"] = sentence[i][0]
        a_dict["translate"] = sentence[i][1]
        a_dict[ "paraid"] = str(i)
        sentence_list.append(a_dict)
    # print sentence_list
    jsondata = json.dumps(sentence_list,ensure_ascii=False)
    print jsondata

# def recommend_passage(userid):
#     conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', \
#                            port = 3306,charset='utf8')
#     cur = conn.cursor()
#     sql = 'select recommend_art_id from user WHERE user_name = "%s"' % (userid)
#     cur.execute(sql)
#     passage_id = cur.fetchall()
#     # print passage_id[0][0]
#     return passage_id[0][0]
# # def offer_passage_recommend()
def offer_passage_recommend_l():
    offer_passage_recommend(sys.argv[1])
if __name__ == '__main__':
     offer_passage_recommend_l()
    # offer_passage_recommend('1')
