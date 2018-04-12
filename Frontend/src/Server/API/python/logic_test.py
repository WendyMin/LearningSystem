#-*- coding:utf-8 -*-
import MySQLdb
import json
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def test():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    all_question_list = []
    count_id_language = []
    count_language = 0
    while (count_language<3):
        id_language = random.randint(1,30)
        if id_language not in count_id_language:
            count_id_language.append(id_language)
            count_language = count_language + 1
        else:
            pass
    # print count_id_language
    for j in range(len(count_id_language)):
        sql = "select * from logic_language WHERE id = %d" % (int(count_id_language[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_language[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '逻辑语言'.decode('utf-8')
        all_question_list.append(question_dict)

    #命题逻辑
    count_id_question = []
    count_question = 0
    while (count_question<3):
        id_question = random.randint(1,138)
        if id_question not in count_id_question:
            count_id_question.append(id_question)
            count_question = count_question + 1
        else:
            pass
    # print count_id_question
    for j in range(len(count_id_question)):
        sql = "select * from logic_question WHERE id = %d" % (int(count_id_question[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_question[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).strip().decode('utf-8')[2::].strip()
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '命题逻辑'.decode('utf-8')
        all_question_list.append(question_dict)


    #词项逻辑
    count_id_word = []
    count_word = 0
    while (count_word<3):
        id_word = random.randint(1,32)
        if id_word not in count_id_word:
            count_id_word.append(id_word)
            count_word = count_word + 1
        else:
            pass
    # print count_id_word
    for j in range(len(count_id_word)):
        sql = "select * from logic_word WHERE id = %d" % (int(count_id_word[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_word[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).strip().decode('utf-8')[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '词项逻辑'.decode('utf-8')
        all_question_list.append(question_dict)

    #逻辑应用
    count_id_apply = []
    count_apply = 0
    while (count_apply<3):
        id_apply = random.randint(1,22)
        if id_apply not in count_id_apply:
            count_id_apply.append(id_apply)
            count_apply = count_apply + 1
        else:
            pass
    # print count_id_apply
    for j in range(len(count_id_apply)):
        sql = "select * from logic_apply WHERE id = %d" % (int(count_id_apply[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_apply[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).strip().decode('utf-8')[2::].strip()
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '逻辑应用'.decode('utf-8')
        all_question_list.append(question_dict)

    #演绎推理
    count_id_yanyituili = []
    count_yanyituili = 0
    while (count_yanyituili<3):
        id_yanyituili = random.randint(1,30)
        if id_yanyituili not in count_id_yanyituili:
           count_id_yanyituili.append(id_language)
           count_yanyituili = count_yanyituili + 1
        else:
            pass
    # print count_id_yanyituili
    for j in range(len(count_id_yanyituili)):
        sql = "select * from logic_yanyituili WHERE id = %d" % (int(count_id_yanyituili[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_yanyituili[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '演绎推理'.decode('utf-8')
        all_question_list.append(question_dict)

    #归纳逻辑
    count_id_conclude = []
    count_conclude = 0
    while (count_conclude<3):
        id_conclude = random.randint(1,74)
        if id_conclude not in count_id_conclude:
           count_id_conclude.append(id_conclude)
           count_conclude = count_conclude + 1
        else:
            pass
    # print count_id_conclude
    for j in range(len(count_id_conclude)):
        sql = "select * from logic_conclude WHERE id = %d" % (int(count_id_conclude[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_conclude[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '归纳逻辑'.decode('utf-8')
        all_question_list.append(question_dict)


    #假设
    count_id_assumption = []
    count_assumption = 0
    while (count_assumption<3):
        id_assumption = random.randint(1,65)
        if id_assumption not in count_id_assumption:
           count_id_assumption.append(id_assumption)
           count_assumption = count_assumption + 1
        else:
            pass
    # print count_id_assumption
    for j in range(len(count_id_assumption)):
        sql = "select * from logic_assumption WHERE id = %d" % (int(count_id_assumption[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_assumption[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '假设'.decode('utf-8')
        all_question_list.append(question_dict)

    #支持
    count_id_support = []
    count_support = 0
    while (count_support<3):
        id_support = random.randint(1,52)
        if id_support not in count_id_support:
           count_id_support.append(id_support)
           count_support = count_support + 1
        else:
            pass
    # print count_id_support
    for j in range(len(count_id_support)):
        sql = "select * from logic_support WHERE id = %d" % (int(count_id_support[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_support[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '支持'.decode('utf-8')
        all_question_list.append(question_dict)

    #削弱
    count_id_cutdown = []
    count_cutdown = 0
    while (count_cutdown<3):
        id_cutdown = random.randint(1,149)
        if id_cutdown not in count_id_cutdown:
           count_id_cutdown.append(id_cutdown)
           count_cutdown = count_cutdown + 1
        else:
            pass
    # print count_id_cutdown
    for j in range(len(count_id_support)):
        sql = "select * from logic_cutdown WHERE id = %d" % (int(count_id_cutdown[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_cutdown[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '削弱'.decode('utf-8')
        all_question_list.append(question_dict)

    #评价
    count_id_evaluate = []
    count_evaluate = 0
    while (count_evaluate<3):
        id_evaluate = random.randint(1,6)
        if id_evaluate not in count_id_evaluate:
           count_id_evaluate.append(id_evaluate)
           count_evaluate = count_evaluate + 1
        else:
            pass
    # print count_id_evaluate
    for j in range(len(count_id_evaluate)):
        sql = "select * from logic_evaluate WHERE id = %d" % (int(count_id_evaluate[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_evaluate[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '评价'.decode('utf-8')
        all_question_list.append(question_dict)

    #解释
    count_id_explain = []
    count_explain = 0
    while (count_explain<3):
        id_explain = random.randint(1,52)
        if id_explain not in count_id_explain:
           count_id_explain.append(id_explain)
           count_explain = count_explain + 1
        else:
            pass
    # print count_id_explain
    for j in range(len(count_id_explain)):
        sql = "select * from logic_explain WHERE id = %d" % (int(count_id_explain[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_explain[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '解释'.decode('utf-8')
        all_question_list.append(question_dict)

    #推论
    count_id_tuilun = []
    count_tuilun = 0
    while (count_tuilun<3):
        id_tuilun = random.randint(1,67)
        if id_tuilun not in count_id_tuilun:
           count_id_tuilun.append(id_tuilun)
           count_tuilun = count_tuilun + 1
        else:
            pass
    # print count_id_tuilun
    for j in range(len(count_id_tuilun)):
        sql = "select * from logic_tuilun WHERE id = %d" % (int(count_id_tuilun[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_tuilun[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '推论'.decode('utf-8')
        all_question_list.append(question_dict)

    #比较
    count_id_compare = []
    count_compare = 0
    while (count_compare<3):
        id_compare = random.randint(1,18)
        if id_compare not in count_id_compare:
           count_id_compare.append(id_compare)
           count_compare = count_compare + 1
        else:
            pass
    # print count_id_compare
    for j in range(len(count_id_compare)):
        sql = "select * from logic_compare WHERE id = %d" % (int(count_id_compare[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_compare[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '比较'.decode('utf-8')
        all_question_list.append(question_dict)

    #描述
    count_id_describe = []
    count_describe = 0
    while (count_describe<3):
        id_describe = random.randint(1,19)
        if id_describe not in count_id_describe:
           count_id_describe.append(id_describe)
           count_describe = count_describe + 1
        else:
            pass
    # print count_id_describe
    for j in range(len(count_id_describe)):
        sql = "select * from logic_describe WHERE id = %d" % (int(count_id_describe[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_describe[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '描述'.decode('utf-8')
        all_question_list.append(question_dict)

    #综合
    count_id_zonghe = []
    count_zonghe = 0
    while (count_zonghe<3):
        id_zonghe = random.randint(1,109)
        if id_zonghe not in count_id_zonghe:
           count_id_zonghe.append(id_zonghe)
           count_zonghe = count_zonghe + 1
        else:
            pass
    # print count_id_zonghe
    for j in range(len(count_id_zonghe)):
        sql = "select * from logic_zonghe WHERE id = %d" % (int(count_id_zonghe[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['order'] = str(j).decode('utf-8')
        question_dict['id'] = str(count_id_zonghe[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8')
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '综合'.decode('utf-8')
        all_question_list.append(question_dict)
    jsondata = json.dumps(all_question_list,ensure_ascii=False)
    print jsondata

if __name__ == '__main__':
    test()