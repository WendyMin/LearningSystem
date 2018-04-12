# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#提供论证有效性分析写作模板
def offer_lunzheng_template():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql='''select section_name from lunzheng_analysis_writing_template '''
    cur.execute(sql)
    all= cur.fetchall()
    a_dict = {}
    for i in range(len(all)):
        a_dict[str(i)] = str(all[i][0]).decode('utf-8')
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata
def offer():
    sys.exit(offer_lunzheng_template())
if __name__ == '__main__':
    offer()
    # offer_lunzheng_template()
