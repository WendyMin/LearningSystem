#-*- coding:utf-8 -*-
import MySQLdb
import json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

#前端返回：用户名 文章id
#return: 本文所有的长难句 json
def show_confuse_sentence_2(user_name,article_id):
    conn = MySQLdb.Connect(host='localhost', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    cur.execute("select * from user_sentence where user_name = '%s'and article_id=%d" % (user_name,article_id))
    sentence = cur.fetchall()

    sentence_id=[]
    for per_sentence in sentence:
        sentence_id.append(per_sentence[3])
    #print(sentence_id)

    cur.execute("select * from confuse_sentence where article_id = '%d'" % (article_id))
    sentence_1=cur.fetchall() #找出article_id的所有句子

    count1=0;count2=0
    final_result=[]
    for x  in sentence_1:
        count1+=1
        if count1 in sentence_id:
            count2+=1
            user_sentence = {}
            # user_sentence['id'] = count2
            user_sentence['en_sentence'] = x[1]
            user_sentence['ch_sentence'] = x[2]
            final_result.append(user_sentence)
    jsondata = json.dumps(final_result, ensure_ascii=False) # json 英文部分如果存在引号 则有反斜杠
    print(jsondata)
def show_confuse_sentence_2_l():
    show_confuse_sentence_2(sys.argv[1],sys.argv[2])
if __name__ == '__main__':
    show_confuse_sentence_2()
    # show_confuse_sentence_2('bbb',30)

