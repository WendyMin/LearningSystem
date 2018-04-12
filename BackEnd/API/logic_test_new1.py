# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def offer_timu(test):
    yi_list=[]
    zhong_list=[]
    nan_list=[]
    for x in test:
        if x[1]=="易":
            yi_list.append(int(x[0]))
        elif x[1]=="中":
            zhong_list.append(int(x[0]))
        elif x[1]=="难":
            nan_list.append(int(x[0]))

    len1=len(yi_list)

    slice=[]
    if len1==0:
        slice=random.sample(zhong_list,4)
    else:

        slice.append(random.sample(yi_list,1)[0])
        slice+=random.sample(zhong_list,2)
        slice.append(random.sample(nan_list,1)[0])


    return slice


def offer_logic_rukouceshi():

    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    chapter_name=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                  'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                  'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']
    final={}
    count=0


    for x in chapter_name:
        id=0
        sql="select id,nanyi from %s "%(x)
        cur.execute(sql)
        test=cur.fetchall()

        slice=offer_timu(test)
        #print(slice)

        result=[]
        for i in slice:
            id+=1
            per_timu={}
            sql2="select question,answer,analysis,op_one,op_two,op_three,op_four,op_five,nanyi from %s where id=%d"%(x,i)
            cur.execute(sql2)
            text=cur.fetchall()
            new_text_question=[]
            new_text_analysis=[]
            text_question=text[0][0]
            text_question=text_question.replace('\r','').split('\n')
            for z in text_question:
                z=z.strip()
                new_text_question.append(z)
            while ""in new_text_question:
                new_text_question.remove("")

            text_analysis=text[0][2]
            text_analysis=text_analysis.replace('\r','').split("\n")

            for y in text_analysis:
                y=y.strip()
                new_text_analysis.append(y)
            while "" in new_text_analysis:
                new_text_analysis.remove("")

            per_timu["question"]=new_text_question
            per_timu["answer"]=text[0][1]
            per_timu["analysis"]=new_text_analysis
            per_timu["op_one"]=text[0][3]
            per_timu["op_two"]=text[0][4]
            per_timu["op_three"]=text[0][5]
            per_timu["op_four"]=text[0][6]
            per_timu["op_five"]=text[0][7]
            if id==1:
                per_timu["nanyi"]="易"
            elif id==2 or id==3:
                per_timu["nanyi"]="中"
            elif id==4:
                per_timu["nanyi"]="难"
            per_timu["type"]=chapter_ch[count]
            per_timu["id"]=id

            result.append(per_timu)

        count+=1
        #json1 = json.dumps(result, ensure_ascii=False)
        #print(json1)




        final[x[12:]]=result


    jsondata = json.dumps(final, ensure_ascii=False)
    print jsondata



def offer_logic_rukouceshi1():
    sys.exit(offer_logic_rukouceshi())
if __name__ == "__main__":

    #offer_logic_rukouceshi1

    offer_logic_rukouceshi()





