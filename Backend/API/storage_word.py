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
# def zhouceshi(userid):
#     conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
#     cur = conn.cursor()
#     sql_ceshi = '''select article_id from article_count  WHERE user_id = %d''' % (userid)
#     cur.execute(sql_ceshi)
#     all_re = cur.fetchall()
#     finishedl_article = []
#     for content in resulo:
#         finished_article.append(int(content[0]))
def word_rate_l(id):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    total_word = []
    total_word_len = 0
    # print 'article:',id
    sql = "select sentense from article_translate_sentence WHERE article_id = %d" % (id) #读取文章
    cur.execute(sql)
    sentence = cur.fetchall()
    # print sentence
    for j in range(len(sentence)):
        sentence_divide = sentence[j][0].split()
        sentence_divide_final = []
        for t in sentence_divide:
            if "'" in t:
                sentence_divide_final.append(t.strip("'"))
            elif '''"''' in t:
                sentence_divide_final.append(t.strip('''"'''))
            else:
                sentence_divide_final.append(t)
        total_word_len += len(sentence_divide_final)
        # print sentence_divide_final
        total_word +=sentence_divide_final
    return total_word

def recommend(wordlist,username,articleidl):
    articleid = int(articleidl)
    errormax = 0
    recommend_article_id = 0
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
    finished_article = []
    for content in resulo:
        finished_article.append(int(content[0]))
    # print finished_article
    lens = len(finished_article)
    unit = lens//7
    unitss = unit + 1
    course = lens+1
    if articleid == -1:
        # print 'hard_word_rate_id = 1'
        for t in range(80):
            article_id = t+1
            count_word = 0
            if article_id == articleid:
                pass
            elif int(article_id) in finished_article:
                pass
            else:
                totalword = word_rate_l(article_id)
                for r in wordlist:
                    if r in totalword:
                        count_word += 1
                hard_word_rate = count_word/len(wordlist)
                # print 'hard_word_rate',hard_word_rate
                sql_1 = "select gaokaoword_rate,kaoyanword_rate,daxue_basicword_rate,daxue_boostingword_rate,zhongkao_word_rate from article_word_relation \
                        WHERE articlr_id = %d" % (article_id) #读取文章
                cur.execute(sql_1)
                rate1 = cur.fetchall()
                # print rate1
                # sql_3 = "select difficult_sentence_rate from article_new WHERE id = %d" % (article_id) #读取文章
                # error = (hard_word_rate-1)**2 + (rate1[0][0]-0)**2 + (rate1[0][1]-0)**2 + (rate1[0][2]-0)**2 + (rate1[0][3]-0)**2 + \
                #     (rate1[0][4]-0)**2
                error = (hard_word_rate-1)**2 + 0.01 #加0.01为了防止error等于0
                error_final = 1/error
                # print 'error',error
                # print 'error_final',error_final
                if error_final >= errormax:
                    errormax = error_final
                    recommend_article_id = article_id
    else:
        count_word_id = 0
        totalword_id = word_rate_l(articleid)
        for r in wordlist:
            if r in totalword_id:
                count_word_id += 1
        hard_word_rate_id = count_word_id/len(wordlist)
        # print 'hard_word_rate_id',hard_word_rate_id
        sql_2 = "select gaokaoword_rate,kaoyanword_rate,daxue_basicword_rate,daxue_boostingword_rate,zhongkao_word_rate from article_word_relation \
                        WHERE articlr_id = %d" % (articleid) #读取文章
        cur.execute(sql_2)
        rate2 = cur.fetchall()
        # print rate2
        sql_3 = "select difficult_sentence_rate from article_new WHERE id = %d" % (articleid)
        cur.execute(sql_3)
        res = cur.fetchall()
        # print res[0][0]
        for t in range(80):
            article_id = t+1
            count_word = 0
            if article_id == articleid:
                pass
            elif int(article_id) in finished_article:
                pass
            else:
                totalword = word_rate_l(article_id)
                for r in wordlist:
                    if r in totalword:
                        count_word += 1
                hard_word_rate = count_word/len(wordlist)
                # print 'hard_word_rate',hard_word_rate
                sql_1 = "select gaokaoword_rate,kaoyanword_rate,daxue_basicword_rate,daxue_boostingword_rate,zhongkao_word_rate from article_word_relation \
                        WHERE articlr_id = %d" % (article_id) #读取文章
                cur.execute(sql_1)
                rate1 = cur.fetchall()
                # print rate1
                sql_4 = "select difficult_sentence_rate from article_new WHERE id = %d" % (article_id)
                cur.execute(sql_4)
                res1 = cur.fetchall()
                error = (hard_word_rate-hard_word_rate_id)**2 + (rate1[0][0]-rate2[0][0])**2 + (rate1[0][1]-rate2[0][1])**2 + \
                        (rate1[0][2]-rate2[0][2])**2 + (rate1[0][3]-rate2[0][3])**2 + (rate1[0][4]-rate2[0][4])**2 + \
                        (res1[0][0]-res[0][0])**2
                error_final = 1/error
                # print 'error',error
                # print 'error_final',error_final
                if error_final >= errormax:
                    errormax = error_final
                    recommend_article_id = article_id
    sql_cun = "update user set recommend_art_id = %s,recommend_rate = %s,next_course = %s,next_unite = %s where user_name = '%s'" % (recommend_article_id,\
                                                                                            errormax,course,unitss,username)
    cur.execute(sql_cun)
    # sql_cun = 'update user set recommend_rate = %s where id = %s' % (errormax,1)
    # cur.execute(sql_cun)
    conn.commit()
    conn.close()
    return recommend_article_id
def storage_word(word,username,articleid):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    time_l = datetime.datetime.now()
    sql_kaoyan_basic = 'select count(*) from kaoyan_basicword WHERE word = "%s"' % (word)
    cur.execute(sql_kaoyan_basic)
    count_kaoyanbasic = cur.fetchall()
    sql_gaokao_basic = 'select count(*) from gaozhong_basicword WHERE word = "%s"' % (word)
    cur.execute(sql_gaokao_basic)
    count_gaokaobasic = cur.fetchall()
    sql_daxue_basic = 'select count(*) from daxue_basicword WHERE word = "%s"' % (word)
    cur.execute(sql_daxue_basic)
    count_daxuebasic = cur.fetchall()
    sql_daxue_boosting = 'select count(*) from daxue_boostingword WHERE word = "%s"' % (word)
    cur.execute(sql_daxue_boosting)
    count_daxueboosting = cur.fetchall()
    sql_zhongkao_basic = 'select count(*) from zhongkao_word WHERE word = "%s"' % (word)
    cur.execute(sql_zhongkao_basic)
    count_zhongkao = cur.fetchall()
    if count_kaoyanbasic[0][0] == 1 or count_gaokaobasic[0][0] == 1 or count_daxuebasic[0][0] == 1 or \
                    count_daxueboosting[0][0] == 1 or count_zhongkao[0][0] == 1:                             #1表示大纲词汇
        cur.execute('insert into word_count values(%s,%s,%s,%s,%s,%s)', (0,username,word,1,articleid,time_l))
        conn.commit()
    else:
        cur.execute('insert into word_count values(%s,%s,%s,%s,%s,%s)', (0,username,word,0,articleid,time_l))
        conn.commit()
    # sql_hardword = 'insert into word_count vaules(%s,%s,%s,%s,%s,%s)', (0,userid,word,0,articleid,0)
    cur.close()
    conn.close()

def recommend_ll(username,articleidl):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    errormax = 0
    articleid = int(articleidl)
    recommend_article_id = 0
    sql_ll = '''select id from user  WHERE user_name = "%s"''' % (username)
    cur.execute(sql_ll)
    resu = cur.fetchall()
    # print resu[0][0]
    user_id = int(resu[0][0])
    sql_lll = '''select article_id from article_count  WHERE user_id = %d''' % (user_id)
    cur.execute(sql_lll)
    resul = cur.fetchall()
    # print resul
    finished_article = []
    for content in resul:
        finished_article.append(int(content[0]))
    # print finished_article
    lens = len(finished_article)
    unit = lens//7
    unitss = unit + 1
    course = lens+1
    if articleid == -1:
        while(True):
            recommend_article_id = random.randint(1,80)
            if recommend_article_id not in finished_article:
                break
    else:
        sql_2 = "select gaokaoword_rate,kaoyanword_rate,daxue_basicword_rate,daxue_boostingword_rate,zhongkao_word_rate from article_word_relation \
                        WHERE articlr_id = %d" % (articleid) #读取文章
        cur.execute(sql_2)
        rate2 = cur.fetchall()
        # print rate2
        sql_3 = "select difficult_sentence_rate from article_new WHERE id = %d" % (articleid)
        cur.execute(sql_3)
        res_l = cur.fetchall()
        # print res_l
        for t in range(80):
            article_id = t+1
            if article_id == articleid:
                pass
            elif article_id in finished_article:
                pass
            else:
                sql_1 = "select gaokaoword_rate,kaoyanword_rate,daxue_basicword_rate,daxue_boostingword_rate,zhongkao_word_rate from article_word_relation \
                        WHERE articlr_id = %d" % (article_id) #读取文章
                cur.execute(sql_1)
                rate1 = cur.fetchall()
                # print rate1
                sql_4 = "select difficult_sentence_rate from article_new WHERE id = %d" % (article_id)
                cur.execute(sql_4)
                res1 = cur.fetchall()
                error = (rate1[0][0]-rate2[0][0])**2 + (rate1[0][1]-rate2[0][1])**2 + \
                        (rate1[0][2]-rate2[0][2])**2 + (rate1[0][3]-rate2[0][3])**2 + (rate1[0][4]-rate2[0][4])**2 + \
                        (res1[0][0]-res_l[0][0])**2
                error_final = 1/error
                if error_final >= errormax:
                    errormax = error_final
                    recommend_article_id = article_id
    sql_cun = "update user set recommend_art_id = %s,recommend_rate = %s,next_course = %s,next_unite = %s where user_name = '%s'" % (recommend_article_id,\
                                                                                            errormax,course,unitss,username)
    cur.execute(sql_cun)
    # print recommend_article_id
    conn.commit()
    conn.close()
    return recommend_article_id
def storage_all_word(wordlist,username,articleid):
    l = len(wordlist)
    if int(l) == 0:
        recommend_ll(username,articleid)
    else:
        for i in wordlist:
            storage_word(i,username,articleid)
        recommend(wordlist,username,articleid)

def storage_wordl():
    sys.exit(storage_all_word(sys.argv[3::],sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    storage_wordl()
    #storage_all_word(['abideuuu',' you', 'I','are','poople'],'lxq',80)
    # recommend_ll('lxq',-1)
    # recommend(['abideuuu',' you', 'I','are','poople'],'lxq',-1)
