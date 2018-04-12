# coding=utf-8
from __future__ import division
import json
import MySQLdb
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
def core_word(articleId):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    articleid = int(articleId)
    sql_lll = '''select word,translate from core_word  WHERE article_id = %d''' % (articleid)
    cur.execute(sql_lll)
    resuu = cur.fetchall()
    # print resuu
    word_list=[]
    for content in resuu:
        word_dict = {}
        word_dict['word'] = content[0]
        word_dict['translate'] = content[1]
        word_list.append(word_dict)
    # print word_list
    jsondata = json.dumps(word_list,ensure_ascii=False)
    print jsondata

def core_word_l():
    sys.exit(core_word(sys.argv[1]))
if __name__ == '__main__':
    # core_word(5)
    core_word_l()