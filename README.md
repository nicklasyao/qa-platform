#基本情况
1. 基于django开发
2. 基于django-suit做页面优化(suit使用的是bootstrap2)

#启动项目
1. 安装python和django
2. qa_platform/settings.py中修改数据库配置
    DATABASES = {}
3. 同步表结构，项目根目录顺序执行以下命令：
    python manage.py makemigrations /
    python manage.py migrate
4. 创建超级管理员
    python manage.py createsuperuser
5. 启动服务：python manage.py runserver
6. 浏览器访问：http://127.0.0.1:8000/admin
