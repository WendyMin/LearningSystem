# coding=utf-8
from __future__ import division
import json
import MySQLdb
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def review(username,articleId):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    articleid = int(articleId)
    sql_lll = '''select sentence_id from user_hard_sentence  WHERE articleid = %d and username = "%s"''' % \
              (articleid,username)
    cur.execute(sql_lll)
    resuu = cur.fetchall()
    # print resuu
    sentence_list = []
    sql_l = '''select sentense,translate from article_translate_sentence  WHERE article_id = %d''' % (articleid)
    cur.execute(sql_l)
    res = cur.fetchall()
    # print res
    if len(resuu) != 0:
        for con in resuu:
            sentence_list.append(int(con[0]))
    # print sentence_list
    hard_list = []
    if len(sentence_list) != 0:
        for id_l in sentence_list:
            hard_list_dict = {}
            hard_list_dict['sentence_id'] = str(id_l)
            hard_list_dict['sentence'] = str(res[int(id_l)-1][0]).decode('utf-8')
            hard_list_dict['translate'] = str(res[int(id_l)-1][1]).decode('utf-8')
            hard_list.append(hard_list_dict)
    # print hard_list
    jsondata = json.dumps(hard_list,ensure_ascii=False)
    print jsondata

def view_l():
    sys.exit(review(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    # review('lxq',5)
    view_l()