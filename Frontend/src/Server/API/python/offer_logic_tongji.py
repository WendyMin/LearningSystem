# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def find_timu(test_zhongdian):  #得到各类题目的标号
    zhongdian_total=[]
    zhongdian_wrong=[]
    for x in test_zhongdian:
        timu_id=x[0].split("*")
        while ""in timu_id:
            timu_id.remove("")
        timu_rate=x[1].split("*")
        while ""in timu_rate:
            timu_rate.remove("")

        for i in range(0,len(timu_id)):
            if timu_rate[i]=='1':
                zhongdian_wrong.append(timu_id[i])
            zhongdian_total.append(timu_id[i])

    return zhongdian_total,zhongdian_wrong

def count(new_index_list,mba_total): #统计每个小类 总的做题个数和错题个数
    count_mba_total=[0 for i in range(0,len(new_index_list))]

    for i in range(0,len(new_index_list)):
        if i==0:
            for j in range(0,len(mba_total)):
                if mba_total[j]<=new_index_list[i] and mba_total[j]>=1:
                   count_mba_total[i]+=1

        else:
            for j in range(0,len(mba_total)):
                if mba_total[j]<=new_index_list[i] and mba_total[j]>new_index_list[i-1]:
                    count_mba_total[i]+=1
    return count_mba_total



def offer_logic_tongji(user,chapter_name_ch):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']

    index_ch=chapter_ch.index(chapter_name_ch)
    chapter_name_en=chapter_en[index_ch]


    finish_ceshi_flag=0
    sql1_1="select user_name,chapter_name from user_logic_finish_ceshi"
    cur.execute(sql1_1)
    test_user_name=cur.fetchall()
    for x in test_user_name:
        if x[0] ==user and x[1]==chapter_name_ch:
            finish_ceshi_flag=1
            break



    if finish_ceshi_flag!=0:

        sql1= "select timu_id,timu_rate from user_logic_finish_zhongdian where user_name='%s' and chapter_name='%s'" %(user,chapter_name_ch)
        cur.execute(sql1)
        test_zhongdian=cur.fetchall()

        sql2= "select timu_id,timu_rate from user_logic_finish_qianghua where user_name='%s' and chapter_name='%s'" %(user,chapter_name_ch)
        cur.execute(sql2)
        test_qianghua=cur.fetchall()

        sql3= "select timu_id,timu_rate from user_logic_finish_ceshi where user_name='%s' and chapter_name='%s'" %(user,chapter_name_ch)
        cur.execute(sql3)
        test_ceshi=cur.fetchall()

        #print(test_zhongdian)
        #print(test_qianghua)
        #print(test_ceshi)

        zhongdian_total,zhongdian_wrong=find_timu(test_zhongdian)
        qianghua_total,qianghua_wrong=find_timu(test_qianghua)
        ceshi_total,ceshi_wrong=find_timu(test_ceshi)

        #print(zhongdian_wrong)
        #print(qianghua_wrong)
        #print(ceshi_wrong)

        total_length=len(zhongdian_total)+len(qianghua_total)+len(ceshi_total) #总体做题数目
        wrong_length=len(zhongdian_wrong)+len(qianghua_wrong)+len(ceshi_wrong) #总体错题数目

        #区分出gct和mba
        gct_total=[]
        gct_wrong=[]
        new_ceshi_total=[]
        new_ceshi_wrong=[]
        for id in ceshi_total:
            if 'g' in id:
                gct_total.append(int(id[1:]))
            else:
                new_ceshi_total.append(int(id))
        for id in ceshi_wrong:
            if 'g' in id:
                gct_wrong.append(int(id[1:]))
            else:
                new_ceshi_wrong.append(int(id))

        gct_total=sorted(gct_total)
        gct_wrong=sorted(gct_wrong)


        mba_total=zhongdian_total+qianghua_total+new_ceshi_total
        print(mba_total)
        mba_total=sorted([int(i) for i in mba_total])
        mba_wrong=zhongdian_wrong+qianghua_wrong+new_ceshi_wrong
        mba_wrong=sorted([int(i) for i in mba_wrong])

        #print(mba_total)
        #print(mba_wrong)

        #找到每个小类在表中的标号
        sql4="select id,type from %s"%(chapter_name_en)
        cur.execute(sql4)
        test_type=cur.fetchall()
        type_list=[]
        index_list=[]
        for x in test_type:
            if x[1] not in type_list:
                type_list.append(x[1])
                index_list.append(int(x[0]))
        new_index_list=[]
        for i in range(1,len(index_list)):
            new_index_list.append(index_list[i]-1)
        new_index_list.append(len(test_type))
        #print(new_index_list)

        # mba 小类统计  gct不再区分小类
        count_mba_total=count(new_index_list,mba_total)
        count_mba_wrong=count(new_index_list,mba_wrong)

        xiaolei_result=[]
        for i in range(0,len(count_mba_wrong)):
            if count_mba_total[i]!=0:  #实际测试中不能为0  为0则表明该小类没有抽取任何题目
                xiaolei_result.append(round((count_mba_wrong[i])*1.0/count_mba_total[i],4))
            else:
                xiaolei_result.append(0)

        final_result={}
        final_result["total_mba"]=round(len(mba_wrong)*1.0/len(mba_total),4)
        final_result["xiaolei_mba"]=xiaolei_result
        if (len(gct_total)!=0):
            final_result["total_gct"]=round(len(gct_wrong)*1.0/len(gct_total),4)
        else:
            final_result["total_gct"]=0
        final_result["total"]=round(wrong_length*1.0/total_length,4)

        final_result["flag"]=finish_ceshi_flag
        final_result["mba_type"]=type_list


    else:
        final_result={}
        final_result["total_mba"]=[]
        final_result["xiaolei_mba"]=[]

        final_result["total_gct"]=[]
        final_result["total"]=[]
        final_result["flag"]=finish_ceshi_flag #flag=0 提示用户先完成测试再查看
        final_result["mba_type"]=[]

    jsondata = json.dumps(final_result,ensure_ascii=False)
    print(jsondata)




def offer_logic_tongji1():
    sys.exit(offer_logic_tongji(sys.argv[1],sys.argv[2]))

if __name__ == "__main__":
	#offer_logic_tongji("testdzh","逻辑语言")
	offer_logic_tongji1()



