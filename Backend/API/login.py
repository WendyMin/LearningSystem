# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
# import xlwt
# import xlrd
import urllib
import json
from urllib import urlencode
from urllib import quote
import sys
import logging
reload(sys)
sys.setdefaultencoding('utf-8')
def login(user_name, pwd):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql = "select pwd from user where user_name = '%s'" % (user_name)
    cur.execute(sql)
    pwdData = cur.fetchall()
    logging.basicConfig(level=logging.DEBUG,
                format='%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s',
                datefmt='%a, %d %b %Y %H:%M:%S',
                filename='learningsystem.log',
                filemode='w')
    if len(pwdData) == 0:
        # print "user doesn't exist!"  # 用户不存在
        logging.info("user doesn't exist!")
        cur.close()
        conn.close()
        return 2
    elif len(pwdData) == 1:
        # print pwdData[0][0]
        if pwdData[0][0] == pwd:
            # a = if_test()
            sql = "select if_test from user WHERE user_name = '%s'" % (user_name) #r读取用户
            cur.execute(sql)
            result = cur.fetchall()
            if result[0][0] == 0:
                logging.info("first time!!")
                # print 'firt time'
                sql_cun = "update user set if_test = %s where user_name = '%s'" % (1,user_name)
                cur.execute(sql_cun)
                conn.commit()
                cur.close()
                conn.close()
                return 0  #首次登录

            else:
                logging.info("Not first time!!")
                # print 'not first time'
                cur.close()
                conn.close()
                return 1  #非首次登录
            # print 'login success'  # 登陆成功
        else:
            # print 'code is wrong,try again'  # 密码错误，请重试
            logging.info("code is wrong,try again")
            cur.close()
            conn.close()
            return 3
    conn.commit()


def loginl():
	sys.exit(login(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
	loginl()



