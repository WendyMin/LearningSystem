# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#提供具体的错误类型内容
def offer_content(error_content):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    con = str(error_content).decode('utf-8')
    sql='''select content from lunzheng_analysis_writing_skill where section_name = '%s' '''%(con)
    cur.execute(sql)
    al = cur.fetchall()
    a_dict = {}
    a_dict['content'] = al[0][0]
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata

def off_l():
    sys.exit(offer_content(sys.argv[1]))
if __name__ == '__main__':
    # offer_content('三断式找错')
    off_l()