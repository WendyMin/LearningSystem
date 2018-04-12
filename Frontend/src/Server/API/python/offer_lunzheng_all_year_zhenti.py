# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def offer_all_year():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql='''select year from lunzheng_analysis_zhenti'''
    cur.execute(sql)
    all= cur.fetchall()
    a_dict={}
    for i in range(len(all)):
        # ss = "管理类联考%s年真题" % (str(all[i][0]).decode('utf-8')).decode('utf-8')
        a_dict[str(i)] = str(all[i][0]).decode('utf-8')
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata
def off_l():
    sys.exit(offer_all_year())
if __name__ == "__main__":
    # offer_all_year()
    off_l()