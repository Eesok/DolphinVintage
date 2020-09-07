# Generated by Django 3.1.1 on 2020-09-07 19:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dolphin', '0003_auto_20200907_1848'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='category_image',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='item_image',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
