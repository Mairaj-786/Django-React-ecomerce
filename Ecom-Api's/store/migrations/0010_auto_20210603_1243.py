# Generated by Django 3.1.3 on 2021-06-03 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_auto_20210603_1227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('Men', 'Men'), ('Women', 'Women'), ('Sport', 'Sport')], max_length=5),
        ),
        migrations.DeleteModel(
            name='Categorie',
        ),
    ]
