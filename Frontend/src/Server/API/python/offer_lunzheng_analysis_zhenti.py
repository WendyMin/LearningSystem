# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def offer_question(year):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # yearl = int(year)
    yearl = str(year).decode('utf-8')
    sql='''select id ,article_title,article_content from lunzheng_analysis_zhenti where year='%s' ''' % (yearl)
    cur.execute(sql)
    all= cur.fetchall()
    a_dict={}
    a_dict['id'] = str(all[0][0]).strip().decode('utf-8')
    a_dict['title'] = str(all[0][1]).strip().decode('utf-8')
    a_dict['content'] = str(all[0][2]).strip().decode('utf-8')
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata

def odd():
    sys.exit(offer_question(sys.argv[1]))
if __name__ == '__main__':
    # offer_question('管理类联考2010年真题')
    odd()

