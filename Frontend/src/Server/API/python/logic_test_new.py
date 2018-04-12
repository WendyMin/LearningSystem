#-*- coding:utf-8 -*-
import MySQLdb
import json
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def logic_testl():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    all_question_list = []
    count_id_language = []
    sql_language_test = "select * from logic_language"
    cur.execute(sql_language_test)
    data_language = cur.fetchall()
    # print data_language
    id_language_yi = []
    id_language_zhong = []
    id_language_nan = []
    for content in data_language:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_language_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_language_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_language_nan.append(content[0])
    if len(id_language_yi) != 0:
        count_id_language.append(id_language_yi[0])
    if len(id_language_zhong) != 0:
        count_id_language.append(id_language_zhong[0])
    if len(id_language_nan) != 0:
        count_id_language.append(id_language_nan[0])
    # print count_id_language
    for j in range(len(count_id_language)):
        sql = "select * from logic_language WHERE id = %d" % (int(count_id_language[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_language[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '逻辑语言'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #命题逻辑
    count_id_question = []
    sql_question_test = "select * from logic_question"
    cur.execute(sql_question_test)
    data_question = cur.fetchall()
    # print data_question
    id_question_yi = []
    id_question_zhong = []
    id_question_nan = []
    for content in data_question:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_question_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_question_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_question_nan.append(content[0])
    if len(id_question_yi) != 0:
       count_id_question.append(id_question_yi[0])
    if len(id_question_zhong) != 0:
       count_id_question.append(id_question_zhong[0])
    if len(id_question_nan) != 0:
       count_id_question.append(id_question_nan[0])
    # print count_id_question
    for j in range(len(count_id_question)):
        sql = "select * from logic_question WHERE id = %d" % (int(count_id_question[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_question[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).strip().decode('utf-8')[2::].strip()
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '命题逻辑'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #词项逻辑
    count_id_word = []
    sql_word_test = "select * from logic_word"
    cur.execute(sql_word_test)
    data_word = cur.fetchall()
    # print data_word
    id_word_yi = []
    id_word_zhong = []
    id_word_nan = []
    for content in data_word:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_word_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_word_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_word_nan.append(content[0])
    if len(id_word_yi) != 0:
       count_id_word.append(id_word_yi[0])
    if len(id_word_zhong) != 0:
       count_id_word.append(id_word_zhong[0])
    if len(id_word_nan) != 0:
       count_id_word.append(id_word_nan[0])
    # print count_id_word
    for j in range(len(count_id_word)):
        sql = "select * from logic_word WHERE id = %d" % (int(count_id_word[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_word[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).strip().decode('utf-8')[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '词项逻辑'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #逻辑应用
    count_id_apply = []
    sql_apply_test = "select * from logic_apply"
    cur.execute(sql_apply_test)
    data_apply = cur.fetchall()
    # print data_apply
    id_apply_yi = []
    id_apply_zhong = []
    id_apply_nan = []
    for content in data_apply:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_apply_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_apply_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_apply_nan.append(content[0])
    if len(id_apply_yi) != 0:
       count_id_apply.append(id_apply_yi[0])
    if len(id_apply_zhong) != 0:
       count_id_apply.append(id_apply_zhong[0])
    if len(id_apply_nan) != 0:
       count_id_apply.append(id_apply_nan[0])
    # print count_id_apply
    for j in range(len(count_id_apply)):
        sql = "select * from logic_apply WHERE id = %d" % (int(count_id_apply[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_apply[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).strip().decode('utf-8')[2::].strip()
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '逻辑应用'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #演绎推理
    count_id_yanyituili = []
    sql_yanyituili_test = "select * from logic_yanyituili"
    cur.execute(sql_yanyituili_test)
    data_yanyituili = cur.fetchall()
    # print data_yanyituili
    id_yanyituili_yi = []
    id_yanyituili_zhong = []
    id_yanyituili_nan = []
    for content in data_yanyituili:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_yanyituili_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_yanyituili_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_yanyituili_nan.append(content[0])
    if len(id_yanyituili_yi) != 0:
       count_id_yanyituili.append(id_yanyituili_yi[0])
    if len(id_yanyituili_zhong) != 0:
       count_id_yanyituili.append(id_yanyituili_zhong[0])
    if len(id_yanyituili_nan) != 0:
       count_id_yanyituili.append(id_yanyituili_nan[0])
    # print count_id_yanyituili
    for j in range(len(count_id_yanyituili)):
        sql = "select * from logic_yanyituili WHERE id = %d" % (int(count_id_yanyituili[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_yanyituili[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '演绎推理'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #归纳逻辑
    count_id_conclude = []
    sql_conclude_test = "select * from logic_conclude"
    cur.execute(sql_conclude_test)
    data_conclude = cur.fetchall()
    # print data_conclude
    id_conclude_yi = []
    id_conclude_zhong = []
    id_conclude_nan = []
    for content in data_conclude:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_conclude_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_conclude_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_conclude_nan.append(content[0])
    if len(id_conclude_yi) != 0:
       count_id_conclude.append(id_conclude_yi[0])
    if len(id_conclude_zhong) != 0:
       count_id_conclude.append(id_conclude_zhong[0])
    if len(id_conclude_nan) != 0:
       count_id_conclude.append(id_conclude_nan[0])
    # print count_id_conclude
    for j in range(len(count_id_conclude)):
        sql = "select * from logic_conclude WHERE id = %d" % (int(count_id_conclude[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_conclude[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '归纳逻辑'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)


    #假设
    count_id_assumption = []
    sql_assumption_test = "select * from logic_assumption"
    cur.execute(sql_assumption_test)
    data_assumption = cur.fetchall()
    # print data_assumption
    id_assumption_yi = []
    id_assumption_zhong = []
    id_assumption_nan = []
    for content in data_assumption:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_assumption_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_assumption_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_assumption_nan.append(content[0])
    if len(id_assumption_yi) != 0:
       count_id_assumption.append(id_assumption_yi[0])
    if len(id_assumption_zhong) != 0:
       count_id_assumption.append(id_assumption_zhong[0])
    if len(id_assumption_nan) != 0:
       count_id_assumption.append(id_assumption_nan[0])
    # print count_id_assumption
    for j in range(len(count_id_assumption)):
        sql = "select * from logic_assumption WHERE id = %d" % (int(count_id_assumption[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_assumption[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '假设'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #支持
    count_id_support = []
    sql_support_test = "select * from logic_support"
    cur.execute(sql_support_test)
    data_support = cur.fetchall()
    # print data_support
    id_support_yi = []
    id_support_zhong = []
    id_support_nan = []
    for content in data_support:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_support_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_support_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_support_nan.append(content[0])
    if len(id_support_yi) != 0:
       count_id_support.append(id_support_yi[0])
    if len(id_support_zhong) != 0:
       count_id_support.append(id_support_zhong[0])
    if len(id_support_nan) != 0:
       count_id_support.append(id_support_nan[0])
    # print count_id_support
    for j in range(len(count_id_support)):
        sql = "select * from logic_support WHERE id = %d" % (int(count_id_support[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_support[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '支持'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #削弱
    count_id_cutdown = []
    sql_cutdown_test = "select * from logic_cutdown"
    cur.execute(sql_cutdown_test)
    data_cutdown = cur.fetchall()
    # print data_cutdown
    id_cutdown_yi = []
    id_cutdown_zhong = []
    id_cutdown_nan = []
    for content in data_cutdown:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_cutdown_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_cutdown_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_cutdown_nan.append(content[0])
    if len(id_cutdown_yi) != 0:
       count_id_cutdown.append(id_cutdown_yi[0])
    if len(id_cutdown_zhong) != 0:
       count_id_cutdown.append(id_cutdown_zhong[0])
    if len(id_cutdown_nan) != 0:
       count_id_cutdown.append(id_cutdown_nan[0])
    # print count_id_cutdown
    for j in range(len(count_id_cutdown)):
        sql = "select * from logic_cutdown WHERE id = %d" % (int(count_id_cutdown[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_cutdown[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '削弱'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #评价
    count_id_evaluate = []
    sql_evaluate_test = "select * from logic_evaluate"
    cur.execute(sql_evaluate_test)
    data_evaluate = cur.fetchall()
    # print data_evaluate
    id_evaluate_yi = []
    id_evaluate_zhong = []
    id_evaluate_nan = []
    for content in data_evaluate:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_evaluate_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_evaluate_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_evaluate_nan.append(content[0])
    if len(id_evaluate_yi) != 0:
       count_id_evaluate.append(id_evaluate_yi[0])
    if len(id_evaluate_zhong) != 0:
       count_id_evaluate.append(id_evaluate_zhong[0])
    if len(id_evaluate_nan) != 0:
       count_id_evaluate.append(id_evaluate_nan[0])
    # print count_id_evaluate
    for j in range(len(count_id_evaluate)):
        sql = "select * from logic_evaluate WHERE id = %d" % (int(count_id_evaluate[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_evaluate[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '评价'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #解释
    count_id_explain = []
    sql_explain_test = "select * from logic_explain"
    cur.execute(sql_explain_test)
    data_explain = cur.fetchall()
    # print data_explain
    id_explain_yi = []
    id_explain_zhong = []
    id_explain_nan = []
    for content in data_explain:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_explain_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_explain_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_explain_nan.append(content[0])
    if len(id_explain_yi) != 0:
       count_id_explain.append(id_explain_yi[0])
    if len(id_explain_zhong) != 0:
       count_id_explain.append(id_explain_zhong[0])
    if len(id_explain_nan) != 0:
       count_id_explain.append(id_explain_nan[0])
    # print count_id_explain
    for j in range(len(count_id_explain)):
        sql = "select * from logic_explain WHERE id = %d" % (int(count_id_explain[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_explain[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '解释'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #推论
    count_id_tuilun = []
    sql_tuilun_test = "select * from logic_tuilun"
    cur.execute(sql_tuilun_test)
    data_tuilun = cur.fetchall()
    # print data_tuilun
    id_tuilun_yi = []
    id_tuilun_zhong = []
    id_tuilun_nan = []
    for content in data_tuilun:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_tuilun_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_tuilun_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_tuilun_nan.append(content[0])
    if len(id_tuilun_yi) != 0:
       count_id_tuilun.append(id_tuilun_yi[0])
    if len(id_tuilun_zhong) != 0:
       count_id_tuilun.append(id_tuilun_zhong[0])
    if len(id_tuilun_nan) != 0:
       count_id_tuilun.append(id_tuilun_nan[0])
    # print count_id_tuilun
    for j in range(len(count_id_tuilun)):
        sql = "select * from logic_tuilun WHERE id = %d" % (int(count_id_tuilun[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_tuilun[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '推论'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #比较
    count_id_compare = []
    sql_compare_test = "select * from logic_compare"
    cur.execute(sql_compare_test)
    data_compare = cur.fetchall()
    # print data_compare
    id_compare_yi = []
    id_compare_zhong = []
    id_compare_nan = []
    for content in data_compare:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_compare_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_compare_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_compare_nan.append(content[0])
    if len(id_compare_yi) != 0:
       count_id_compare.append(id_compare_yi[0])
    if len(id_compare_zhong) != 0:
       count_id_compare.append(id_compare_zhong[0])
    if len(id_compare_nan) != 0:
       count_id_compare.append(id_compare_nan[0])
    # print count_id_compare
    for j in range(len(count_id_compare)):
        sql = "select * from logic_compare WHERE id = %d" % (int(count_id_compare[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_compare[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '比较'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #描述
    count_id_describe = []
    sql_describe_test = "select * from logic_describe"
    cur.execute(sql_describe_test)
    data_describe = cur.fetchall()
    # print data_describe
    id_describe_yi = []
    id_describe_zhong = []
    id_describe_nan = []
    for content in data_describe:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_describe_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_describe_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_describe_nan.append(content[0])
    if len(id_describe_yi) != 0:
       count_id_describe.append(id_describe_yi[0])
    if len(id_describe_zhong) != 0:
       count_id_describe.append(id_describe_zhong[0])
    if len(id_describe_nan) != 0:
       count_id_describe.append(id_describe_nan[0])
    # print count_id_describe
    for j in range(len(count_id_describe)):
        sql = "select * from logic_describe WHERE id = %d" % (int(count_id_describe[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_describe[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '描述'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)

    #综合
    count_id_zonghe = []
    sql_zonghe_test = "select * from logic_zonghe"
    cur.execute(sql_zonghe_test)
    data_zonghe = cur.fetchall()
    # print data_zonghe
    id_zonghe_yi = []
    id_zonghe_zhong = []
    id_zonghe_nan = []
    for content in data_zonghe:
        if content[10].decode('utf-8') == '易'.decode('utf-8'):
            id_zonghe_yi.append(content[0])
        if content[10].decode('utf-8') == '中'.decode('utf-8'):
            id_zonghe_zhong.append(content[0])
        if content[10].decode('utf-8') == '难'.decode('utf-8'):
            id_zonghe_nan.append(content[0])
    if len(id_zonghe_yi) != 0:
       count_id_zonghe.append(id_zonghe_yi[0])
    if len(id_zonghe_zhong) != 0:
       count_id_zonghe.append(id_zonghe_zhong[0])
    if len(id_zonghe_nan) != 0:
       count_id_zonghe.append(id_zonghe_nan[0])
    # print count_id_zonghe
    for j in range(len(count_id_zonghe)):
        sql = "select * from logic_zonghe WHERE id = %d" % (int(count_id_zonghe[j]))
        cur.execute(sql)
        data = cur.fetchall()
        question_dict = {}
        question_dict['id'] = str(count_id_zonghe[j]).decode('utf-8')
        question_dict['question'] = str(data[0][1]).decode('utf-8').strip()[2::].strip()
        # print str(data[0][1]).decode('utf-8').strip()[2::]
        question_dict['answer'] = str(data[0][2]).decode('utf-8')
        question_dict['analysis'] = str(data[0][3]).decode('utf-8').strip()[2::].strip()
        option_list = []
        option_list.append(str(data[0][4]).decode('utf-8'))
        option_list.append(str(data[0][5]).decode('utf-8'))
        option_list.append(str(data[0][6]).decode('utf-8'))
        option_list.append(str(data[0][7]).decode('utf-8'))
        option_list.append(str(data[0][8]).decode('utf-8'))
        question_dict['option'] = option_list
        question_dict['type'] = '综合'.decode('utf-8')
        question_dict['hard'] = str(data[0][10]).decode('utf-8')
        all_question_list.append(question_dict)
    # print len(all_question_list)
    all_question_list_easy=[];all_question_list_meddium=[];all_question_list_hard=[]
    for contt in all_question_list:
        if str(contt['hard']).decode('utf-8') == '易'.decode('utf-8'):
            all_question_list_easy.append(contt)
        elif str(contt['hard']).decode('utf-8') == '中'.decode('utf-8'):
            all_question_list_meddium.append(contt)
        else:
            all_question_list_hard.append(contt)
    all_easy = {};all_meddium = {};all_hard = {}
    all_easy['easy']=all_question_list_easy
    all_meddium['meddium']=all_question_list_meddium
    all_hard['hard']=all_question_list_hard
    j_e = json.dumps(all_easy,ensure_ascii=False)
    j_m = json.dumps(all_meddium,ensure_ascii=False)
    j_h = json.dumps(all_hard,ensure_ascii=False)
    j_e_s = j_e[1:len(j_e)-1]
    j_m_s = j_m[1:len(j_m)-1]
    j_h_s = j_h[1:len(j_h)-1]
    # print all_question_list_easy
    # print all_question_list_meddium
    # print all_question_list_hard
    # aa = sorted(all_l.items(), key=lambda e:e[0], reverse=False)
    # print len(aa)
    # jsondata = json.dumps(all_l,ensure_ascii=False)
    print '{'+j_e_s+','+j_m_s+','+j_h_s+'}'
if __name__ == '__main__':
    logic_testl()
