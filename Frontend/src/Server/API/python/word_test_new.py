# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def test_word():
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    idlist = []
    count = 0
    while (count<60):
        id = random.randint(2,1591)
        if id not in idlist:
            idlist.append(id)
            count = count + 1
        else:
            pass
    all = {}
    basic_list = []
    for i in range(15):
        word_dict = {}
        sql = "select word,fanyi1 from zhongkao_word WHERE id = %d" % (idlist[i])
        cur.execute(sql)
        data = cur.fetchall()
        sql_sub = "select fanyi1 from zhongkao_word WHERE id in (%d,%d,%d)" % \
         (idlist[i+15],idlist[i+30],idlist[i+45])
        cur.execute(sql_sub)
        data_l = cur.fetchall()
        # print data_l
        # print data[0][1]
        word_dict['word'] = str(data[0][0])
        # b = [0,1,2,3]
        # random.shuffle(b)
        # ind = b.index(0)
        ind = random.randint(0,3)
        # print word_dict
        option_list = []
        for j in range(4):
            option_dict = {}
            if int(j) == int(ind):
                # option_dict['index'] = int(-1)
                # option_dict['content'] = str(data[0][1])
                # option_list.append(option_dict)
                option_list.append(str(data[0][1]))
            else:
                if int(j)<int(ind):
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j][0]))
                else:
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j-1][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j-1][0]))
        word_dict['options'] = option_list
        word_dict['key'] = int(ind)
        basic_list.append(word_dict)
    all_b = {}
    all_b['basic'] = basic_list
    #从高考词汇表中选取单词
    idlist_mid = []
    count_mid = 0
    while (count_mid<60):
        id = random.randint(2,2144)
        if id not in idlist_mid:
            idlist_mid.append(id)
            count_mid = count_mid + 1
        else:
            pass
    # print idlist_mid
    # print len(idlist_mid)
    mid_list = []
    for i in range(15):
        word_dict = {}
        sql = "select word,fanyi1 from gaozhong_basicword WHERE id = %d" % (idlist_mid[i])
        cur.execute(sql)
        data = cur.fetchall()
        sql_sub = "select fanyi1 from gaozhong_basicword WHERE id in (%d,%d,%d)" % \
         (idlist_mid[i+15],idlist_mid[i+30],idlist_mid[i+45])
        cur.execute(sql_sub)
        data_l = cur.fetchall()
        # print data[0][1]
        word_dict['word'] = str(data[0][0])
        # b = [0,1,2,3]
        # random.shuffle(b)
        # ind = b.index(0)
        ind = random.randint(0,3)
        # print word_dict
        option_list = []
        for j in range(4):
            option_dict = {}
            if int(j) == int(ind):
                # option_dict['index'] = int(-1)
                # option_dict['content'] = str(data[0][1])
                # option_list.append(option_dict)
                option_list.append(str(data[0][1]))
            else:
                if int(j)<int(ind):
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j][0]))
                else:
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j-1][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j-1][0]))
        word_dict['options'] = option_list
        word_dict['key'] = int(ind)
        mid_list.append(word_dict)
    all_m={}
    all_m['mid'] = mid_list
    # print all

    #从大学基本词汇中选取
    idlist_advance = []
    count_advance = 0
    while (count_advance<60):
        id = random.randint(1,1185)
        if id not in idlist_advance:
            idlist_advance.append(id)
            count_advance = count_advance + 1
        else:
            pass
    # print idlist_advance
    # print len(idlist_advance)
    advance_list = []
    for i in range(15):
        word_dict = {}
        sql = "select word,fanyi1 from daxue_basicword WHERE id = %d" % (idlist_advance[i])
        cur.execute(sql)
        data = cur.fetchall()
        sql_sub = "select fanyi1 from daxue_basicword WHERE id in (%d,%d,%d)" % \
         (idlist_advance[i+15],idlist_advance[i+30],idlist_advance[i+45])
        cur.execute(sql_sub)
        data_l = cur.fetchall()
        # print data[0][1]
        word_dict['word'] = str(data[0][0])
        # b = [0,1,2,3]
        # random.shuffle(b)
        # ind = b.index(0)
        ind = random.randint(0,3)
        # print word_dict
        option_list = []
        for j in range(4):
            option_dict = {}
            if int(j) == int(ind):
                # option_dict['index'] = int(-1)
                # option_dict['content'] = str(data[0][1])
                # option_list.append(option_dict)
                option_list.append(str(data[0][1]))
            else:
                if int(j)<int(ind):
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j][0]))
                else:
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j-1][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j-1][0]))
        word_dict['options'] = option_list
        word_dict['key'] = int(ind)
        advance_list.append(word_dict)
    all_a={}
    all_a['advance'] = advance_list

    #从大学提高词汇中选
    idlist_extreme = []
    count_extreme = 0
    while (count_extreme<60):
        id = random.randint(1,1622)
        if id not in idlist_extreme:
            idlist_extreme.append(id)
            count_extreme = count_extreme + 1
        else:
            pass
    # print idlist_extreme
    # print len(idlist_extreme)
    extreme_list = []
    for i in range(15):
        word_dict = {}
        sql = "select word,fanyi1 from daxue_boostingword WHERE id = %d" % (idlist_extreme[i])
        cur.execute(sql)
        data = cur.fetchall()
        sql_sub = "select fanyi1 from daxue_boostingword WHERE id in (%d,%d,%d)" % \
         (idlist_extreme[i+15],idlist_extreme[i+30],idlist_extreme[i+45])
        cur.execute(sql_sub)
        data_l = cur.fetchall()
        # print data[0][1]
        word_dict['word'] = str(data[0][0])
        # b = [0,1,2,3]
        # random.shuffle(b)
        # ind = b.index(0)
        ind = random.randint(0,3)
        # print word_dict
        option_list = []
        for j in range(4):
            option_dict = {}
            if int(j) == int(ind):
                # option_dict['index'] = int(-1)
                # option_dict['content'] = str(data[0][1])
                # option_list.append(option_dict)
                option_list.append(str(data[0][1]))
            else:
                if int(j)<int(ind):
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j][0]))
                else:
                    # option_dict['index'] = int(1)
                    # option_dict['content'] = str(data_l[j-1][0])
                    # option_list.append(option_dict)
                    option_list.append(str(data_l[j-1][0]))
        word_dict['options'] = option_list
        word_dict['key'] = int(ind)
        extreme_list.append(word_dict)
    all_e={}
    all_e['extreme'] = extreme_list
    j_b = json.dumps(all_b,ensure_ascii=False)
    j_m = json.dumps(all_m,ensure_ascii=False)
    j_a = json.dumps(all_a,ensure_ascii=False)
    j_e = json.dumps(all_e,ensure_ascii=False)
    j_b_s = j_b[1:len(j_b)-1]
    j_m_s = j_m[1:len(j_m)-1]
    j_a_s = j_e[1:len(j_a)-1]
    j_e_s = j_e[1:len(j_e)-1]
    # print j_m[1:len(j_m)-1:]
    # print all
    # jsondata = json.dumps(all,ensure_ascii=False)
    print '{'+j_b_s+','+j_m_s+','+j_a_s+','+j_e_s+'}'
if __name__ == '__main__':
    test_word()