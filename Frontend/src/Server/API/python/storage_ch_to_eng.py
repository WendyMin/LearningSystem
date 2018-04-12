#-*- coding:utf-8 -*-
import MySQLdb
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#前端返回三个参数：user_name,article_id,sentence_id
#每次执行该函数，自行插入一条数据
def create_user_sentence(user_name,articleId,sentenceId):
    conn = MySQLdb.Connect(host='localhost', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    article_id = int(articleId)
    sentence_id = int(sentenceId)
    cur.execute("insert into user_sentence values(%s,%s,%s,%s)", (0, user_name,article_id,sentence_id))
    cur.close()
    conn.commit()
    conn.close()
def create_user_sentence_l():
    create_user_sentence(sys.argv[1],sys.argv[2],sys.argv[3])
if __name__ == '__main__':
    # create_user_sentence('lxq','5','2')
    create_user_sentence_l()