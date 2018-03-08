#-*-coding:utf-8-*-

import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

#前端提供：用户名
#返回：该用户所有做过的logic大类名，例如：[{"done_chapters": ["描述", "支持", "归纳"]}]

if __name__=='__main__':
    content = []
    content.append({'done_chapters': "论证逻辑"})
    content.append({'done_chapters': "形式逻辑"})
    content.append({'done_chapters': "命题逻辑"})
    jsondata = json.dumps(content, ensure_ascii=False)
    print(jsondata)
