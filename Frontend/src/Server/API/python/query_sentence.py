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
sys.setdefaultencoding('utf-8')
cutlist1 =".!?".decode('utf-8')
cutlist2 ="。？！".decode('utf-8')
cutlist3=['Mr','Mrs','Ms','Jr','Dr','Prof','Sr','Ph','Jan','Feb','Mar','Apr','May','Jun','Jul',\
          'Aug','Sep','Sept','Oct','Nov','Dec','Va','vs','A','B','C','D','E','F','G','H','I','J','K','L','M',\
          'N','O','P','Q','R','S','T','U','V','W','X','Y','Z','2','5','(e.g','(e','Inc','St','0','￡4','59','8 '\
          ,'（4','(7']
#检查某字符是否分句标志符号的函数；如果是，返回True，否则返回False
def FindToken(cutlist, char):
    if char in cutlist:
        return True
    else:
        return False
#检查是否特殊英文符号的函数；如果没有Mr.，返回True，否则返回False
def IsSpecialWords(linesss):
    listarr = ''
    for i in linesss:
        listarr = listarr + i
    # line = [''.join(line)]
    for i in cutlist3:
        if listarr.endswith(i):
           return False
           break
        else:
            pass
    return True
#进行分句的核心函数
def Cut(cutlist,lines):          #参数1：引用分句标志符；参数2：被分句的文本，为一行中文字符
    l = []         #句子列表，用于存储单个分句成功后的整句内容，为函数的返回值
    line = []    #临时列表，用于存储捕获到分句标志符之前的每个字符，一旦发现分句符号后，就会将其内容全部赋给l，然后就会被清空

    for i in lines:
        #对函数参数2中的每一字符逐个进行检查 （本函数中，如果将if和else对换一下位置，会更好懂）
        if FindToken(cutlist,i):       #如果当前字符是分句符号
            if IsSpecialWords(line):
                line.append(i)  # 将此字符放入临时列表中
                l.append(''.join(line))  # 并把当前临时列表的内容加入到句子列表中
                line = []  # 将符号列表清空，以便下次分句使用
            else:
                line.append(i)

        else:         #如果当前字符不是分句符号，则将该字符直接放入临时列表中
            line.append(i)
    return l#以下为调用上述函数实现从文本文件中读取内容并进行分句。
def translate_sentence(user_name,lock,articleId):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    passageid = 0
    if str(lock) == '1':
        passageid = int(articleId)
    else:
        sql_recommend_id = 'select recommend_art_id from user WHERE user_name = "%s"' % (user_name)
        cur.execute(sql_recommend_id)
        passage_id = cur.fetchall()
        passageid = passage_id[0][0]
    sql_section = 'select english from article_section WHERE article_id = %d' % (passageid)
    cur.execute(sql_section)
    passage_section = cur.fetchall()
    # print passage_section
    # print len(passage_section)
    article_section_list = []
    for i in passage_section:
        article_section_list.append(i[0])
    # print article_section_list
    article_section_number = []
    for lines in article_section_list:                                         #切分英文
        l = Cut(cutlist1,lines.strip().decode('utf-8'))

        el = []
        for line in l:
            if line.strip() !="":
                # print line.strip()
                el.append(line.strip())
            else:
                # print line
                el.append(line)
        article_section_number.append(len(el))
    # print article_section_number
    sql_sentence = 'select sentense,translate from article_translate_sentence WHERE article_id = %d' % (passageid)
    cur.execute(sql_sentence)
    passage_sentence = cur.fetchall()
    # print passage_sentence
    article_translate_dict = {}
    article_translate_list = []
    # article_translate_list_list = []
    begin = 0
    for j in range(len(article_section_number)):
        article_translate_list_list = []
        for i in range(article_section_number[j]):
            translate_dict = {}
            translate_dict["artid"] = str(passageid)
            translate_dict["sentid"] = str(i+begin+1)
            translate_dict["sentence"] = passage_sentence[begin+i][0]
            translate_dict["translate"] = passage_sentence[begin+i][1]
            translate_dict["paraid"] = str(j+1)
            article_translate_list_list.append(translate_dict)
        begin += article_section_number[j]
        article_translate_list.append(article_translate_list_list)
    # print article_translate_list_list
    # print len(passage_sentence),sum(article_section_number),len(article_translate_list_list)
    # article_translate_list.append(article_translate_list_list)
    article_translate_dict["article_translate_sentence"] = article_translate_list
    jsondata = json.dumps(article_translate_dict["article_translate_sentence"],ensure_ascii=False)
    #print jsondata
    # jsondata_sub = jsondata[1:len(jsondata)-1]
    # print jsondata_sub
    cur.close()
    conn.close()
    print jsondata
def get_translate_sentence():
	sys.exit(translate_sentence(sys.argv[1],sys.argv[2],sys.argv[3]))
if __name__ == '__main__':
    get_translate_sentence()
