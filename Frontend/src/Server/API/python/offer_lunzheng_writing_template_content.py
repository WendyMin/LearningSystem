# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#根据名称提供具体的内容
def offer(content_name):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    con = str(content_name).decode('utf-8')
    sql='''select content from lunzheng_analysis_writing_template where section_name='%s' ''' % (con)
    cur.execute(sql)
    all= cur.fetchall()
    a_dict = {}
    a_dict['content'] = all[0][0]
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata
def off():
    sys.exit(offer(sys.argv[1]))
if __name__ == '__main__':
    # offer('四步解题法')
    off()