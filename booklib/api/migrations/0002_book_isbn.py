# Generated by Django 5.0.6 on 2024-06-17 18:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="book",
            name="isbn",
            field=models.CharField(default=0, max_length=13, unique=True),
            preserve_default=False,
        ),
    ]