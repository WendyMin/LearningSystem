# coding=utf-8
from __future__ import division
import json
import MySQLdb
import datetime
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
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
        total_word +=sentence_divide_final
    return total_word
def record(username,wordcount,wrong_wordlist):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    unitss = int(1)
    course = int(1)
    recommend_article_id = 0
    errormax = 0
    for t in range(80):
        article_id = t+1
        count_word = 0
        totalword = word_rate_l(article_id)
        for r in wrong_wordlist:
            if r in totalword:
                count_word += 1
        hard_word_rate = count_word/len(wrong_wordlist)
        error = (hard_word_rate-1)**2 + 0.01 #加0.01为了防止error等于0
        error_final = 1/error
        if error_final >= errormax:
            errormax = error_final
            recommend_article_id = article_id
    sql_cun = "update user set recommend_art_id = %s,recommend_rate = %s,next_course = %s,next_unite = %s ,if_word_test = %s ,wordtest_count = %s where user_name = '%s'" % (recommend_article_id,\
                                                                                            errormax,course,unitss,1,int(wordcount),username)
    cur.execute(sql_cun)
    conn.commit()
    conn.close()
    return recommend_article_id

def storage_word(word,username):
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
        cur.execute('insert into word_test_storage values(%s,%s,%s,%s,%s)', (0,username,word,1,time_l))
        conn.commit()
    else:
        cur.execute('insert into word_test_storage values(%s,%s,%s,%s,%s)', (0,username,word,0,time_l))
        conn.commit()
    # sql_hardword = 'insert into word_count vaules(%s,%s,%s,%s,%s,%s)', (0,userid,word,0,articleid,0)
    cur.close()
    conn.close()
def recommend_ll(username,wordcount):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    unitss = int(1)
    course = int(1)
    recommend_article_id = 0
    errormax = 1
    recommend_article_id = random.randint(1,80)
    sql_cun = "update user set recommend_art_id = %s,recommend_rate = %s,next_course = %s,next_unite = %s ,if_word_test = %s ,wordtest_count = %s where user_name = '%s'" % (recommend_article_id,\
                                                                                            errormax,course,unitss,1,int(wordcount),username)
    cur.execute(sql_cun)
    conn.commit()
    conn.close()
    return recommend_article_id
def storage_l(username,wordcount,wrong_wordlist,uu):
    l = len(wrong_wordlist)
    if int(l) == 0:
        recommend_ll(username,wordcount)
    else:
        for i in wrong_wordlist:
            storage_word(i,username)
        record(username,wordcount,wrong_wordlist)
def storage_ll():
    print type(sys.argv),sys.argv.index('0'),'a'
    print sys.argv[1::],sys.argv[1],sys.argv[4],sys.argv[3],sys.argv[2]
    print sys.argv[1],sys.argv[len(sys.argv)-1],sys.argv[sys.argv.index('0')+1:len(sys.argv)-1],sys.argv[2:sys.argv.index('0'):]
    sys.exit(storage_l(sys.argv[1],sys.argv[len(sys.argv)-1],sys.argv[sys.argv.index('0')+1:len(sys.argv)-1],sys.argv[2:sys.argv.index('0'):]))
if __name__ == '__main__':
    # record('gyc','100',['a','b'])
    # storage_word('a','lxq')
    # recommend_ll('lxq','56')
    # storage_l('lxq','10',[])
    storage_ll()