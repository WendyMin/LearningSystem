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

def show_chart(username,articleid):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    total_word = []
    out_ofclass_word_num = 0
    sql_l = "select sentense from article_translate_sentence WHERE article_id = %d" % (articleid) #读取文章
    cur.execute(sql_l)
    sentence = cur.fetchall()
    # print sentence
    for j in range(len(sentence)):
        sentence_divide = sentence[j][0].split()    #把每句话分成单词，并去掉引号存入sentence_divide_finai中
        sentence_divide_final = []
        for t in sentence_divide:
            if "'" in t:
                sentence_divide_final.append(t.strip("'"))
            elif '''"''' in t:
                sentence_divide_final.append(t.strip('''"'''))
            else:
                sentence_divide_final.append(t)
        # total_word_len += len(sentence_divide_final)
        # print sentence_divide_final                                                   #句子分为单词
        total_word +=sentence_divide_final                                            #全部单词
    # print len(total_word),total_word
    for word in total_word:
        if word.endswith(',') or word.endswith('.') or word.endswith('s') or word.endswith(';') :
            word = word[:len(word)-1:]
            # print
        if word.endswith('ing'):
            word = word[:len(word)-3:]
            # print word
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
            pass
            # cur.execute('insert into word_count values(%s,%s,%s,%s,%s,%s)', (0,username,word,1,articleid,time_l))
            # conn.commit()
        else:
            # cur.execute('insert into word_count values(%s,%s,%s,%s,%s,%s)', (0,username,word,0,articleid,time_l))
            out_ofclass_word_num += 1
            # print word
    # print out_ofclass_word_num
    sql = 'select gaokaoword_num,kaoyanword_num,daxue_basicword_num,daxue_boostingword_num, \
    zhongkao_word_num from article_word_relation WHERE articlr_id = "%s"' % (articleid)
    cur.execute(sql)
    result = cur.fetchall()
    toltal = result[0][0] + result[0][1] + result[0][2] + result[0][3] + result[0][4] + out_ofclass_word_num
    # print toltal
    gaokao_rate = float(result[0][0])/float(toltal)
    kaoyan_rate = float(result[0][1])/float(toltal)
    daxue_basic_rate = float(result[0][2])/float(toltal)
    daxue_boosting_rate = float(result[0][3])/float(toltal)
    zhongkao_rate = float(result[0][4])/float(toltal)
    out_ofclass_word_num_rate = float(out_ofclass_word_num)/float(toltal)
    word_rate = []
    word_rate_dict = {}
    word_rate_dict['type'] = "articleword"
    word_rate_dict['gaokao'] = str(gaokao_rate)
    word_rate_dict['kaoyan'] = str(kaoyan_rate)
    word_rate_dict['CET4'] = str(daxue_basic_rate)
    word_rate_dict['CET6'] = str(daxue_boosting_rate)
    word_rate_dict['zhongkao'] = str(zhongkao_rate)
    word_rate_dict['chaogang'] = str(out_ofclass_word_num_rate)
    word_rate.append(word_rate_dict)
    word_list = []
    sql_word = "select new_word from word_count WHERE user_name = '%s' and article_id = %d" % (username,articleid)
    cur.execute(sql_word)
    result_word = cur.fetchall()
    for w in result_word:
        word_list.append(w[0])
    word_l = set(word_list)
    word_list = list(word_l)
    gaokaoword_num_l = 0
    kaoyanword_num_l = 0
    daxuebasicword_num_l = 0
    daxueboostingword_num_l = 0
    zhongkaoword_num_l = 0
    out_ofclass_word_num_l = 0
    for word in word_list:
        try:
            sql_zhongkao = 'select count(*) from zhongkao_word WHERE word = "%s"' % (word)
            sql_kaoyan = 'select count(*) from kaoyan_basicword WHERE word = "%s"' % (word)
            sql_gaokao = 'select count(*) from gaozhong_basicword WHERE word = "%s"' % (word)
            sql_daxuebasic = 'select count(*) from daxue_basicword WHERE word = "%s"' % (word)
            sql_daxueboosting = 'select count(*) from daxue_boostingword WHERE word = "%s"' % (word)
            cur.execute(sql_kaoyan)
            count_kaoyan = cur.fetchall()
            kaoyanword_num_l += count_kaoyan[0][0]           #出现多少次
            cur.execute(sql_gaokao)
            count_gaokao = cur.fetchall()
            gaokaoword_num_l += count_gaokao[0][0]           #出现多少次
            cur.execute(sql_zhongkao)
            count_zhongkao = cur.fetchall()
            zhongkaoword_num_l += count_zhongkao[0][0]
            cur.execute(sql_daxuebasic)
            count_daxuebasic = cur.fetchall()
            daxuebasicword_num_l += count_daxuebasic[0][0]
            cur.execute(sql_daxueboosting)
            count_daxueboosting = cur.fetchall()
            daxueboostingword_num_l += count_daxueboosting[0][0]
            if kaoyanword_num_l == 1 or gaokaoword_num_l == 1 or daxuebasicword_num_l == 1 or \
                        daxueboostingword_num_l == 1 or zhongkaoword_num_l == 1:                             #1表示大纲词汇
                pass
            else:
                out_ofclass_word_num_l += 1
        except:
            pass
    toltal_l = gaokaoword_num_l + kaoyanword_num_l + daxuebasicword_num_l +daxueboostingword_num_l +zhongkaoword_num_l + \
        out_ofclass_word_num_l
    gaokao_rate_l = float(gaokaoword_num_l)/float(toltal_l)
    kaoyan_rate_l = float(kaoyanword_num_l)/float(toltal_l)
    daxue_basic_rate_l = float(daxuebasicword_num_l)/float(toltal_l)
    daxue_boosting_rate_l = float(daxueboostingword_num_l)/float(toltal_l)
    zhongkao_rate_l = float(zhongkaoword_num_l)/float(toltal_l)
    out_ofclass_word_num_rate_l = float(out_ofclass_word_num_l)/float(toltal_l)
    new_word_dict = {}
    new_word_dict['type'] = "unknowword"
    new_word_dict['zhongkao'] = str(zhongkao_rate_l)
    new_word_dict['gaokao'] = str(gaokao_rate_l)
    new_word_dict['CET4'] = str(daxue_basic_rate_l)
    new_word_dict['CET6'] = str(daxue_boosting_rate_l)
    new_word_dict['kaoyan'] = str(kaoyan_rate_l)
    new_word_dict['chaogang'] = str(out_ofclass_word_num_rate_l)
    word_rate.append(new_word_dict)
    question_dict_l = {}
    question_dict_l['tpye'] = "questiontype"
    question_dict_l['content'] = "主旨题".decode('utf-8')
    word_rate.append(question_dict_l)
    question_dict = {}
    sql_error_question = 'select count(*) from error_question WHERE ariticle_id = %d and username = "%s"' % (articleid,articleid)
    cur.execute(sql_error_question)
    result_error = cur.fetchall()
    sql_question_all = 'select count(*) from question WHERE article_id = %d' % (articleid)
    cur.execute(sql_question_all)
    result_all = cur.fetchall()
    question_dict['tpye'] = "errorrate"
    question_dict['allquestiona'] = str(result_all[0][0])
    question_dict['errorquestion'] = str(result_error[0][0])
    question_dict['errorrate'] = str(float(result_error[0][0])/float(result_all[0][0]))
    word_rate.append(question_dict)
    jsondata = json.dumps(word_rate,ensure_ascii=False)
    print jsondata
def show_chartl():
    sys.exit(show_chart(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    # show_chart('1',1)
    show_chartl()
