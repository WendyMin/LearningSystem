#-*- coding:utf-8 -*-
import MySQLdb
import json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def show_confuse_sentence(articleId):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    passageid = int(articleId)
    sql_question = "select * from confuse_sentence WHERE article_id = %d" % (passageid)  # 读取文章
    cur.execute(sql_question)
    sentence = cur.fetchall()
    article_setion_sentence = []
    for i in range(0,len(sentence)):
        pre_sentence=list(sentence[i])
        article_sentence_all = {}
        article_sentence_all['sentence_id'] = i
        article_sentence_all['english'] = pre_sentence[1]
        article_sentence_all['chinese'] = pre_sentence[2]
        article_sentence_all['analysis'] =pre_sentence[3]
        article_setion_sentence.append(article_sentence_all)
    jsondata = json.dumps(article_setion_sentence, ensure_ascii=False)
    cur.close()
    conn.close()

    print(jsondata)

def show_l():
    sys.exit(show_confuse_sentence(sys.argv[1]))
if __name__ == '__main__':
    # show_confuse_sentence('1')
    show_l()
