# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
import random
import urllib
import json
from urllib import urlencode
from urllib import quote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def get_sentence():
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', \
                           port = 3306,charset='utf8')
    cur = conn.cursor()
    select_num = []
    while True:
        a = random.randint(1,300)
        if a not in select_num:
            select_num.append(int(a))
        if len(select_num) == 3:
            break
    # print select_num
    result_list = []
    for j in range(len(select_num)):
        re_dict = {}
        sql = 'select en_sentence,ch_sentence from writing_sentence WHERE id = "%s"' % (select_num[j])
        cur.execute(sql)
        result = cur.fetchall()
        re_dict['id'] = str(select_num[j])
        re_dict['english'] = str(result[0][0]).decode('utf-8')
        re_dict['chinese'] = str(result[0][1]).decode('utf-8')
        if j == 2:
            re_dict['type'] = '1'
        else:
            re_dict['type'] = '0'
        result_list.append(re_dict)
    # print result_list
    jsondata = json.dumps(result_list,ensure_ascii=False)
    print jsondata
if __name__ == '__main__':
    get_sentence()
