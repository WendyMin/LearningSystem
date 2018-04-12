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
#查找每个生词，如果是超纲词汇，则存到out_of_class表
def query_word(word):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', \
                           port = 3306,charset='utf8')
    cur = conn.cursor()
    # cur = connect_db()
    l = []
    index = 0
    sql_kaoyan_basic = 'select * from kaoyan_basicword WHERE word = "%s"' % (word)
    cur.execute(sql_kaoyan_basic)
    kaoyanbasic = cur.fetchall()
    l.append(kaoyanbasic)
    sql_gaokao_basic = 'select * from gaozhong_basicword WHERE word = "%s"' % (word)
    cur.execute(sql_gaokao_basic)
    gaokaobasic = cur.fetchall()
    l.append(gaokaobasic)
    sql_daxue_basic = 'select * from daxue_basicword WHERE word = "%s"' % (word)
    cur.execute(sql_daxue_basic)
    daxuebasic = cur.fetchall()
    l.append(daxuebasic)
    sql_daxue_boosting = 'select * from daxue_boostingword WHERE word = "%s"' % (word)
    cur.execute(sql_daxue_boosting)
    daxueboosting = cur.fetchall()
    l.append(daxueboosting)
    sql_zhongkao_basic = 'select * from zhongkao_word WHERE word = "%s"' % (word)
    cur.execute(sql_zhongkao_basic)
    zhongkao = cur.fetchall()
    l.append(zhongkao)
    word_dict = {}
    word_list = []
    word_dict_dict = {}
    for i in l:
        if len(i) != 0:

            word_dict_dict['word_l']  = i[0][1]
            word_dict_dict['yinbiao']  = i[0][2]
            # word_dict_dict['cixing']  = i[0][3]
            word_dict_dict['translate']  = i[0][4]
            word_dict_dict['duanyu']  = i[0][7]
            word_dict_dict['liju']  = i[0][9]
            word_dict_dict['liju_translate']  = i[0][10]
            index = 1
            word_list.append(word_dict_dict)
            word_dict['word'] = word_list
            jsondata = json.dumps(word_dict['word'],ensure_ascii=False)
            # jsondata_sub = jsondata[1:len(jsondata)-1]
            # print jsondata
            # print word_dict_dict
            return word_dict_dict
            # break
            # return jsondata
    if index == 0:    #如果在词库查找不到对应的单词，则调用有道词库
        time.sleep(1)#休眠1s，禁止过度频繁调用网易API
        a = youdao_api(word)
        # print a
        return a
def youdao_api(word):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # cur = connect_db()
    a = word.split()
    length = len(a)
    key = '993123434'
    keyfrom = 'pdblog'
    url = 'http://fanyi.youdao.com/openapi.do' + '?keyfrom=' + keyfrom + '&key='+key + '&type=data&doctype=json&version=1.1&q=' + word
    # print url
    try:
        result = urllib.urlopen(url).read()
        json_result = json.loads(result)
        word_dict = {}
        word_list = []
        word_dict_dict = {}
        # print json_result_T[0]
        # json_result_W = json_result['web']
        # sheet.write(0,0, json_result_T)
        # for i in range(len(json_result_T)):
        #     print json_result_T[i]
        # for i in range(len(json_result_W)):
        #     jsion_result_W_i = json_result_W[i]
        #     jsion_result_W_i_key = jsion_result_W_i['key']
        #     jsion_result_W_i_value = jsion_result_W_i['value']
        #     print jsion_result_W_i_key
        #     for j in range(len(jsion_result_W_i_value)):
        #         print jsion_result_W_i_value[j]
        # json_result_B_phonetic = json_result_B['phonetic']
        # print json_result_B_phonetic

        # print json_result_B_explain[0]
        if length == 1:     #判断是单词还是句子 1 是单词 否则是句子
            sql_outofclass = 'select * from out_of_class WHERE word = "%s"' % (word)
            cur.execute(sql_outofclass)
            kaoyan_outclass = cur.fetchall()
            if len(kaoyan_outclass) == 0:
                json_result_B = json_result["basic"]
                json_result_B_explain = json_result_B['explains']
                cur.execute('insert into out_of_class values(%s,%s,%s)', (0,word,json_result_B_explain[0]))
            # word_dict_dict = {}
            word_dict_dict['word_l']  = str(word).decode('utf-8')
            word_dict_dict['yinbiao']  = json_result['basic']['phonetic']
            word_dict_dict['translate']  = json_result['translation'][0]
            word_dict_dict['duanyu']  = json_result['web'][1]['key']
            word_dict_dict['liju']  = ''
            word_dict_dict['liju_translate'] = ''
            word_list.append(word_dict_dict)
            word_dict['word'] = word_list
            jsondata = json.dumps(word_dict['word'],ensure_ascii=False)
            # jsondata_sub = jsondata[1:len(jsondata)-1]
            conn.commit()
            cur.close()
            conn.close()
            # print word_dict_dict
            return word_dict_dict
        else:
            # word_dict_dict = {}
            # json_result_B = json_result["basic"]
            # json_result_B_explain = json_result_B['explains']
            # cur.execute('insert into out_of_class values(%s,%s,%s)', (0,word,json_result_B_explain[0]))
            word_dict_dict['word_l']  = str(word).decode('utf-8')
            word_dict_dict['yinbiao']  = ''
            word_dict_dict['translate']  = json_result['translation'][0]
            word_dict_dict['duanyu']  = ''
            word_dict_dict['liju']  = ''
            word_dict_dict['liju_translate'] = ''
            word_list.append(word_dict_dict)
            word_dict['word'] = word_list
            jsondata = json.dumps(word_dict['word'],ensure_ascii=False)
            # jsondata_sub = jsondata[1:len(jsondata)-1]
            cur.close()
            conn.close()
            # print word_dict_dict
            return word_dict_dict
    except:
        cur.close()
        conn.close()
        return 'not existing'
def query_all_word(wordlist):
    word_list = []
    for word in wordlist:
        wordl = query_word(str(word))
        word_list.append(wordl)
    jsondata = json.dumps(word_list,ensure_ascii=False)
    print jsondata

def query_wordl():
	sys.exit(query_all_word(sys.argv[1::]))
if __name__ == '__main__':
    # query_word('e')
    # query_all_word(['we','we are','w'])
   query_wordl()
