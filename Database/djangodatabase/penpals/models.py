from django.db import models

class Penpals(models.Model):
	user_id = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 25)
	gender = models.CharField(max_length = 50)
	location = models.CharField(max_length = 100)
	bio = models.CharField(max_length = 140)
	password = models.CharField(max_length = 25)
	email = models.EmailField()

	def __str__(self):
		return self.name + " " + str(self.user_id) 

class Letters(models.Model):
	subject = models.CharField(max_length = 100)
	content = models.CharField(max_length = 25000)
	to = models.ForeignKey('Penpals', on_delete = models.CASCADE, related_name = 'receiver')
	sender = models.ForeignKey('Penpals', on_delete = models.CASCADE, related_name = 'writer')

	def __str__(self):
		return self.subject

class Friend(models.Model):
	id1 = models.ForeignKey('Penpals', on_delete = models.CASCADE, related_name = 'friend1')
	id2 = models.ForeignKey('Penpals', on_delete = models.CASCADE, related_name = 'friend2')

