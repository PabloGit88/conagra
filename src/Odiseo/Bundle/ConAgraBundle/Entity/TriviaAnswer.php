<?php

namespace Odiseo\Bundle\ConAgraBundle\Entity;

class TriviaAnswer
{
	protected $id;
	protected $createdAt;
	protected $updatedAt;
	protected $title;
	protected $question;
	
	public function __construct()
	{
		$this->createdAt = new \DateTime('now');
	}
	
	public function getId() 
	{
		return $this->id;
	}
	
	public function setId($id) 
	{
		$this->id = $id;		
		return $this;
	}
	
	public function setCreatedAt($createdAt)
	{
		$this->createdAt = $createdAt;
		return $this;
	}
	
	public function getCreatedAt()
	{
		return $this->createdAt;
	}
	
	public function setUpdatedAt($updatedAt)
	{
		$this->updatedAt = $updatedAt;
		return $this;
	}
	
	public function getUpdatedAt()
	{
		return $this->updatedAt;
	}
	
	public function getTitle() 
	{
		return $this->fullName;
	}
	
	public function setTitle($title)
	{
		$this->title = $title;
		return $this;
	}
	
	public function getQuestion()
	{
		return $this->question;
	}
	
	public function setQuestion($question)
	{
		$this->question = $question;
		return $this;
	}
}