# coding=utf-8
from __future__ import division
import json
import MySQLdb
import time
import datetime
import urllib
import json
from urllib import urlencode
from urllib import quote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
def registerl():
    sys.exit(register(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8],sys.argv[9]))
def register(user_name, email, pwd,studytype,age, exam_type,major,expectation,idnum):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    phone = '12345656'
    sql1 = "SELECT * FROM user WHERE  user_name = '%s'" % (user_name)  # 查看用户名是否已存在
    sql2 = "SELECT * FROM user WHERE  email = '%s'" % (email)  # 查看邮箱是否已存在
    sql3 = """INSERT INTO user (user_name,pwd,email,phone,exam_type,if_test)\
     VALUES ('%s','%s','%s','%s','%s','%s')""" % (user_name, pwd, email, phone, exam_type,0)  # 添加

    # (user_name,pwd,email,phone,exam_type)  ('a','b','c','1','as')

    # 判断用户是否存在
    cur.execute(sql1)
    userTest = cur.fetchall()
    if len(userTest) > 0:
        return 1
    # 判断邮箱是否存在
    cur.execute(sql2)
    emailTest = cur.fetchall()
    if len(emailTest) > 0:
        return 2
    # 添加
    if len(userTest) == 0 and len(emailTest) == 0:
        try:
            cur.execute(sql3)
            conn.commit()
            return 0
        except Exception as e:
            print e
            conn.rollback()

#用户登录
if __name__ == '__main__':
    registerl()