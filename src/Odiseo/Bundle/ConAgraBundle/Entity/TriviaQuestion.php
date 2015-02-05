<?php

namespace Odiseo\Bundle\ConAgraBundle\Entity;


use Doctrine\Common\Collections\ArrayCollection;
class TriviaQuestion
{
	protected $id;
	protected $createdAt;
	protected $updatedAt;
	protected $title;
	protected $country;
	protected $position;
	protected $answers;
	
	public function __construct()
	{
		$this->createdAt = new \DateTime('now');
		$this->answers = new ArrayCollection();
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
		return $this->title;
	}
	
	public function setTitle($title)
	{
		$this->title = $title;
		return $this;
	}
	
	public function getCountry()
	{
		return $this->country;
	}
	
	public function setCountry($country)
	{
		$this->country = $country;
		return $this;
	}
	
	public function setPosition($position)
	{
		$this->position = $position;
		return $this;
	}
	
	public function getPosition()
	{
		return $this->position;
	}
	
	public function getAnswers()
	{
		return $this->answers;
	}
	
	public function setAnswers($answers)
	{
		$this->answers = $answers;
		return $this;
	}
}