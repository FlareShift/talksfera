# Generated by Django 5.1.4 on 2025-01-15 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_user_options_alter_user_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=255),
        ),
    ]
