# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#提供论说文写作技巧精讲的类别
def offer_lunshuowen_error():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    a_dict = {}
    a_dict['0'] = "题型突破".decode('utf-8')
    a_dict['1'] = "审题立意".decode('utf-8')
    a_dict['2'] = "经典模板".decode('utf-8')
    a_dict['3'] = "画龙点睛".decode('utf-8')
    a_dict['4'] = "素材宝典".decode('utf-8')
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata
if __name__ == "__main__":
    offer_lunshuowen_error()