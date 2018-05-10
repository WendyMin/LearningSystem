#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')



def offer_logic_zhishidian_dalei(user,chapter_name_ch):



    conn1 =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur1 = conn1.cursor()

    #判断是否做过水平测试
    all_user_name=[]
    sql1_1="select user_name from user_logic_shuipingceshi"
    cur1.execute(sql1_1)
    test_user_name=cur1.fetchall()
    for x in test_user_name:
        if x[0] not in all_user_name:
            all_user_name.append(x[0])

    shuipingceshi_flag=1
    if user not in all_user_name:
        shuipingceshi_flag=0



    if shuipingceshi_flag!=0:

        sql11="select introduce from logic_mba_dalei where section='%s' "%(chapter_name_ch)

        cur1.execute(sql11)
        text=cur1.fetchall()[0][0]
        text=text.replace('\r','').split('\n')
        new_text=[]
        for x in text:
            x=x.strip()
            new_text.append(x)
        while "" in new_text:
            new_text.remove("")

        #print(new_text)


        result_dict={}
        result_dict["content"]=new_text


        sql22="select type,introduce from logic_mba_xiaolei where belongto='%s'" %(chapter_name_ch)
        cur1.execute(sql22)
        text1=cur1.fetchall()
        type_list=[]
        for x in text1:
            type_list.append(x[0])


        xiaolei=[]
        for x in text1:

            name=x[0]

            xiaolei_dict={}
            new_xiaolei_x=[]
            xiaolei_x=x[1].replace('\r','').split('\n')

            for x in xiaolei_x:
                x=x.strip()
                new_xiaolei_x.append(x)
            while ""in new_xiaolei_x:
                new_xiaolei_x.remove("")


            xiaolei.append(new_xiaolei_x)

        result_dict["chapter_name"]=chapter_name_ch
        result_dict["xiaolei"]=xiaolei
        result_dict["shunxu"]=type_list
        result_dict["flag"]=shuipingceshi_flag



        jsondata = json.dumps(result_dict, ensure_ascii=False)
        print jsondata


    else:
        result_dict={}
        result_dict["chapter_name"]=[]
        result_dict["xiaolei"]=[]
        result_dict["shunxu"]=[]
        result_dict["flag"]=shuipingceshi_flag
        jsondata = json.dumps(result_dict, ensure_ascii=False)
        print jsondata
        #print("该用户未做过水平测试")


def offer_logic_zhishidian_dalei1():
    sys.exit(offer_logic_zhishidian_dalei(sys.argv[1],sys.argv[2]))

if __name__ == '__main__':
    offer_logic_zhishidian_dalei1()

    #offer_logic_zhishidian_dalei('testdzh','逻辑语言')
