# Generated by Django 3.1.3 on 2021-06-03 19:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0008_categori'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Categori',
            new_name='Categorie',
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(default=True, on_delete=django.db.models.deletion.CASCADE, to='store.categorie'),
        ),
    ]
