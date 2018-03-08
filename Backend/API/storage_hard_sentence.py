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
import logging
reload(sys)
sys.setdefaultencoding('utf-8')
def storage_hard_sentences(username,articleid,sentenceid):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    print 'a'
    cur.execute('insert into user_hard_sentence values(%s,%s,%s,%s)', (0,username,articleid,sentenceid))
    conn.commit()
    print 'b'
    cur.close()
    conn.close()

def storage_all_hard_sentences(username,articleid,sentencelist_id):
    print articleid
    print sentencelist_id
    for i in sentencelist_id:
        storage_hard_sentences(username,articleid,i)

def storagel():
    sys.exit(storage_all_hard_sentences(sys.argv[1],sys.argv[2],sys.argv[3::]))

if __name__ == '__main__':
    storagel()
    # storage_all_hard_sentences('lxq','23',['1','5','8'])