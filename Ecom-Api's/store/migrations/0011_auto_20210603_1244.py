# Generated by Django 3.1.3 on 2021-06-03 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0010_auto_20210603_1243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('Men', 'Men'), ('Women', 'Women'), ('Sport', 'Sport')], default='Women', max_length=5),
        ),
    ]
