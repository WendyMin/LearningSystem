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

def hard_word(username,articleId):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    articleid = int(articleId)
    sql_lll = '''select new_word from word_count  WHERE user_name = "%s" and article_id = %d''' % (username,articleid)
    cur.execute(sql_lll)
    resuu = cur.fetchall()
    # print resuu
    all_word = []
    for content in resuu:
        all_word.append(content[0])
    # print all_word
    all_word_list = []
    if len(all_word) != 0:
        for wo in all_word:
            resw = query_word(wo)
            if 'not existing' != resw and resw != '':
                all_word_list.append(resw)
    # print all_word_list
    # all_word_dict = {}
    # all_word_dict['word'] = all_word
    jsondata = json.dumps(all_word_list,ensure_ascii=False)
    # jsondata_sub = jsondata[1:len(jsondata)-1]
    print jsondata
def query_word(word):
    conn = MySQLdb.Connect(host = 'localhost',user = 'root', passwd = '123456', db = 'gyc_f_e', \
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
    word_dict_dict = {}
    for i in l:
        if len(i) != 0:
            # print 'cik'
            word_dict_dict['word_l']  = i[0][1]
            word_dict_dict['translate']  = i[0][4]
            index = 1
            # print word_dict_dict
            return word_dict_dict
    if index == 0:    #如果在词库查找不到对应的单词，则调用有道词库
        time.sleep(1)#休眠1s，禁止过度频繁调用网易API
        a = youdao_api(word)
        return a
def youdao_api(word):
    conn = MySQLdb.Connect(host='localhost', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # print 'youdao'
    a = word.split()
    length = len(a)
    key = '993123434'
    keyfrom = 'pdblog'
    url = 'http://fanyi.youdao.com/openapi.do' + '?keyfrom=' + keyfrom + '&key='+key + '&type=data&doctype=json&version=1.1&q=' + word
    # print url
    try:
        result = urllib.urlopen(url).read()
        json_result = json.loads(result)
        word_dict_dict = {}
        if str(word).decode('utf-8') != str(json_result['translation'][0]).decode('utf-8'):
            word_dict_dict['word_l']  = str(word).decode('utf-8')
            word_dict_dict['translate']  = json_result['translation'][0]
        # print word_dict_dict
            return word_dict_dict
        else:
            return ''
    except:
        cur.close()
        conn.close()
        return 'not existing'
def hard_word_l():
    sys.exit(hard_word(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    # hard_word('lxq','-1')
    # query_word('unwholesome')
    hard_word_l()
